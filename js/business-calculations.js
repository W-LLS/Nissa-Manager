(function (root) {
  "use strict";

  const requiredApi = ["cumulativeBonus", "budgetStatus", "breakEven", "monthlyOccurrences", "productionLotCost", "weightedAverageCost", "analyzeIntegrity"];
  if (root.NissaCalculations && requiredApi.every((name) => typeof root.NissaCalculations[name] === "function")) return;

  const finiteNonNegative = (value) => {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : 0;
  };

  const cumulativeBonus = (quantity, rules) => {
    const total = finiteNonNegative(quantity);
    return (Array.isArray(rules) ? rules : []).reduce((sum, rule) => {
      const threshold = finiteNonNegative(rule?.threshold);
      const bonus = finiteNonNegative(rule?.bonus);
      return sum + (threshold > 0 && total >= threshold ? bonus : 0);
    }, 0);
  };

  const budgetStatus = ({ budget, spent }) => {
    const limit = finiteNonNegative(budget);
    const actual = finiteNonNegative(spent);
    const remaining = Math.max(0, limit - actual);
    const overrun = Math.max(0, actual - limit);
    const usage = limit > 0 ? actual / limit * 100 : null;
    const status = limit <= 0 ? "Non défini" : actual > limit ? "Dépassé" : usage >= 90 ? "À surveiller" : "Dans le budget";
    return { budget: limit, spent: actual, remaining, overrun, usage, status };
  };

  const breakEven = ({ revenue, directCosts, fixedCosts, units }) => {
    const turnover = finiteNonNegative(revenue);
    const variable = finiteNonNegative(directCosts);
    const fixed = finiteNonNegative(fixedCosts);
    const volume = finiteNonNegative(units);
    const contribution = turnover - variable;
    const marginRatio = turnover > 0 ? contribution / turnover : 0;
    const contributionPerUnit = volume > 0 ? contribution / volume : 0;
    const breakEvenRevenue = marginRatio > 0 ? Math.ceil(fixed / marginRatio) : null;
    const breakEvenUnits = contributionPerUnit > 0 ? Math.ceil(fixed / contributionPerUnit) : null;
    return {
      revenue: turnover,
      directCosts: variable,
      fixedCosts: fixed,
      units: volume,
      contribution,
      marginRatio,
      contributionPerUnit,
      breakEvenRevenue,
      breakEvenUnits,
      revenueGap: breakEvenRevenue === null ? null : Math.max(0, breakEvenRevenue - turnover),
      reached: breakEvenRevenue !== null && turnover >= breakEvenRevenue
    };
  };

  const validIsoDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
  const daysInMonth = (year, month) => new Date(Date.UTC(year, month, 0)).getUTCDate();
  const monthlyOccurrences = (rule, throughDate, existingKeys = []) => {
    if (!rule || !validIsoDate(rule.startDate) || !validIsoDate(throughDate)) return [];
    const day = Math.min(31, Math.max(1, Math.floor(finiteNonNegative(rule.dayOfMonth) || 1)));
    const endDate = validIsoDate(rule.endDate) ? rule.endDate : throughDate;
    const limit = endDate < throughDate ? endDate : throughDate;
    if (rule.startDate > limit) return [];
    const known = new Set(existingKeys);
    const occurrences = [];
    let [year, month] = rule.startDate.slice(0, 7).split("-").map(Number);
    const lastMonth = limit.slice(0, 7);
    while (`${year}-${String(month).padStart(2, "0")}` <= lastMonth) {
      const monthKey = `${year}-${String(month).padStart(2, "0")}`;
      const date = `${monthKey}-${String(Math.min(day, daysInMonth(year, month))).padStart(2, "0")}`;
      const occurrenceKey = `${rule.id}:${monthKey}`;
      if (date >= rule.startDate && date <= limit && !known.has(occurrenceKey)) occurrences.push({ date, month: monthKey, occurrenceKey });
      month += 1;
      if (month === 13) { month = 1; year += 1; }
    }
    return occurrences;
  };

  const productionLotCost = ({ ingredients, otherCosts, actualQuantity }) => {
    const quantity = Math.floor(finiteNonNegative(actualQuantity));
    const materialCost = (Array.isArray(ingredients) ? ingredients : []).reduce((sum, item) => sum + finiteNonNegative(item?.quantity) * finiteNonNegative(item?.unitCost), 0);
    const totalCost = materialCost + finiteNonNegative(otherCosts);
    return { materialCost, totalCost, actualQuantity: quantity, unitCost: quantity > 0 ? totalCost / quantity : null };
  };

  const weightedAverageCost = ({ currentQuantity, currentAverageCost, addedQuantity, addedTotalCost }) => {
    const current = finiteNonNegative(currentQuantity);
    const added = finiteNonNegative(addedQuantity);
    const quantity = current + added;
    const value = current * finiteNonNegative(currentAverageCost) + finiteNonNegative(addedTotalCost);
    return { quantity, value, averageCost: quantity > 0 ? value / quantity : 0 };
  };

  const analyzeIntegrity = (data = {}) => {
    const issues = [];
    let checks = 0;
    const rows = (name) => Array.isArray(data[name]) ? data[name] : [];
    const text = (value) => String(value ?? "").trim();
    const add = (severity, code, message) => issues.push({ severity, code, message });
    const index = (items, field = "id") => new Set(items.map((item) => text(item?.[field])).filter(Boolean));
    const stableIds = (items, label, field = "id") => {
      checks += 1;
      const values = items.map((item) => text(item?.[field]));
      const missing = values.filter((value) => !value).length;
      const duplicates = values.filter((value, position) => value && values.indexOf(value) !== position);
      if (missing) add("error", "missing-id", `${label} : ${missing} identifiant(s) absent(s).`);
      if (duplicates.length) add("error", "duplicate-id", `${label} : ${new Set(duplicates).size} identifiant(s) dupliqué(s).`);
    };
    const nonNegative = (items, fields, label) => {
      checks += 1;
      const invalid = items.filter((item) => fields.some((field) => !Number.isFinite(Number(item?.[field])) || Number(item[field]) < 0));
      if (invalid.length) add("error", "invalid-number", `${label} : ${invalid.length} ligne(s) contiennent un montant ou une quantité invalide.`);
    };

    const records = rows("records");
    const expenses = rows("expenses");
    const treasury = rows("treasury");
    const sellers = rows("sellers");
    const sales = rows("sellerSales");
    const cycles = rows("sellerCycles");
    const absences = rows("sellerAbsences");
    const recurringExpenses = rows("recurringExpenses");
    const expenseBudgets = rows("expenseBudgets");
    const materials = rows("materialCatalog");
    const recipes = rows("productRecipes");
    const lots = rows("productionLots");
    const productInventory = rows("productInventory");
    const purchases = rows("materialPurchases");
    const materialInventory = rows("materialInventory");

    [
      [records, "Historique"], [expenses, "Dépenses"], [treasury, "Trésorerie"],
      [sellers, "Vendeurs"], [sales, "Ventes vendeurs"], [cycles, "Cycles vendeurs"],
      [absences, "Absences"], [recurringExpenses, "Dépenses récurrentes"],
      [materials, "Matières"], [lots, "Lots"], [purchases, "Achats matières"]
    ].forEach(([items, label]) => stableIds(items, label));
    stableIds(recipes, "Recettes", "productKey");
    stableIds(productInventory, "Stock produits", "productKey");
    stableIds(materialInventory, "Stock matières", "materialId");

    nonNegative(records, ["cv", "qn", "total", "ca", "depenses"], "Historique");
    nonNegative(expenses, ["amount"], "Dépenses");
    nonNegative(treasury, ["amount"], "Trésorerie");
    nonNegative(sales, ["cv", "qn", "total", "ca", "directCost"], "Ventes vendeurs");
    nonNegative(productInventory, ["quantity", "averageCost"], "Stock produits");
    nonNegative(materialInventory, ["quantity", "averageCost"], "Stock matières");

    const sellerIds = index(sellers);
    const saleIds = index(sales);
    const cycleIds = index(cycles);
    const materialIds = index(materials);
    const purchaseIds = index(purchases);
    const lotIds = index(lots);
    const expenseIds = index(expenses);
    checks += 1;
    cycles.forEach((cycle) => {
      if (!sellerIds.has(text(cycle.sellerId))) add("error", "orphan-cycle", `Le cycle ${text(cycle.id) || "sans identifiant"} référence un vendeur absent.`);
    });
    sales.forEach((sale) => {
      if (!sellerIds.has(text(sale.sellerId)) || !cycleIds.has(text(sale.cycleId))) add("error", "orphan-sale", `La vente ${text(sale.id) || "sans identifiant"} référence un vendeur ou un cycle absent.`);
    });
    absences.forEach((absence) => {
      if (!sellerIds.has(text(absence.sellerId)) || !cycleIds.has(text(absence.cycleId))) add("error", "orphan-absence", `L’absence ${text(absence.id) || "sans identifiant"} référence un vendeur ou un cycle absent.`);
    });
    recipes.forEach((recipe) => {
      (Array.isArray(recipe.ingredients) ? recipe.ingredients : []).forEach((ingredient) => {
        if (!materialIds.has(text(ingredient.materialId))) add("error", "orphan-recipe", `La recette ${text(recipe.productKey) || "sans produit"} référence une matière absente.`);
      });
    });
    lots.forEach((lot) => {
      (Array.isArray(lot.ingredients) ? lot.ingredients : []).forEach((ingredient) => {
        if (!materialIds.has(text(ingredient.materialId))) add("error", "orphan-lot", `Le lot ${text(lot.id) || "sans identifiant"} référence une matière absente.`);
      });
    });
    materialInventory.forEach((item) => {
      if (!materialIds.has(text(item.materialId))) add("error", "orphan-material-stock", `Une ligne de stock référence une matière absente (${text(item.materialId) || "identifiant vide"}).`);
    });
    purchases.forEach((purchase) => {
      const linkedExpense = expenses.find((expense) => expense.id === purchase.expenseId);
      if (!materialIds.has(text(purchase.materialId))) add("error", "orphan-purchase", `L’achat ${text(purchase.id) || "sans identifiant"} référence une matière absente.`);
      if (!linkedExpense || linkedExpense.source !== "inventory-purchase" || linkedExpense.materialPurchaseId !== purchase.id) add("error", "purchase-expense", `L’achat ${text(purchase.id) || "sans identifiant"} n’a pas d’écriture de dépense liée cohérente.`);
    });
    expenses.forEach((expense) => {
      if (expense.source === "seller-sale" && !saleIds.has(text(expense.sellerSaleId))) add("error", "orphan-expense", `La dépense ${expense.id} référence une vente absente.`);
      if (expense.source === "inventory-purchase" && !purchaseIds.has(text(expense.materialPurchaseId))) add("error", "orphan-expense", `La dépense ${expense.id} référence un achat absent.`);
      if (expense.source === "production-input" && !lotIds.has(text(expense.productionLotId))) add("error", "orphan-expense", `La dépense ${expense.id} référence un lot absent.`);
    });

    checks += 1;
    sales.forEach((sale) => {
      const linked = expenses.filter((expense) => expense.source === "seller-sale" && expense.sellerSaleId === sale.id);
      if (linked.length !== 1) add("error", "sale-expense", `La vente ${sale.id} possède ${linked.length} écriture(s) de coût au lieu d’une.`);
      else if (Math.round(Number(linked[0].amount)) !== Math.round(Number(sale.directCost))) add("warning", "sale-cost", `Le coût lié à la vente ${sale.id} diffère du coût direct figé.`);
    });

    checks += 1;
    const sellerDateKeys = sales.map((sale) => `${sale.sellerId}|${sale.date}`);
    const duplicateSellerDates = sellerDateKeys.filter((value, position) => sellerDateKeys.indexOf(value) !== position);
    if (duplicateSellerDates.length) add("error", "duplicate-seller-date", `${new Set(duplicateSellerDates).size} journée(s) vendeur sont enregistrées plusieurs fois pour la même date.`);
    const salesByDate = sales.reduce((output, sale) => {
      const current = output[sale.date] || { cv: 0, qn: 0, total: 0, ca: 0 };
      ["cv", "qn", "total", "ca"].forEach((field) => { current[field] += Number(sale[field] || 0); });
      output[sale.date] = current;
      return output;
    }, {});
    Object.entries(salesByDate).forEach(([date, totals]) => {
      const days = records.filter((record) => record.source === "seller-sales" && record.date === date);
      if (days.length !== 1) add("error", "seller-day", `Le ${date}, ${days.length} journée(s) agrégée(s) existent au lieu d’une.`);
      else if (["cv", "qn", "total", "ca"].some((field) => Number(days[0][field]) !== totals[field])) add("error", "seller-day-total", `La journée agrégée du ${date} ne correspond pas aux ventes vendeurs.`);
    });

    checks += 1;
    const paymentMovements = treasury.filter((movement) => movement.type === "out" && movement.category === "salaires" && text(movement.reference?.cycleId));
    paymentMovements.forEach((movement) => {
      if (!cycleIds.has(text(movement.reference.cycleId)) || movement.reference?.sellerId && !sellerIds.has(text(movement.reference.sellerId))) add("error", "orphan-payment", `Le paiement ${movement.id} référence un cycle ou un vendeur absent.`);
    });
    cycles.forEach((cycle) => {
      const payments = paymentMovements.filter((movement) => movement.reference.cycleId === cycle.id);
      const paidMarker = cycle.status === "PAID" || Boolean(text(cycle.paymentDate)) || Boolean(text(cycle.treasuryMovementId)) || Number(cycle.paidAmount || 0) > 0;
      if (payments.length > 1) add("error", "duplicate-payment", `Le cycle ${cycle.id} possède ${payments.length} paiements.`);
      if (paidMarker && payments.length === 0) add("error", "missing-payment", `Le cycle ${cycle.id} est marqué payé sans sortie de trésorerie.`);
      if (!paidMarker && payments.length) add("warning", "unlocked-payment", `Le cycle ${cycle.id} possède un paiement mais n’est pas marqué payé.`);
      if (cycle.treasuryMovementId && !payments.some((movement) => movement.id === cycle.treasuryMovementId)) add("error", "payment-link", `Le cycle ${cycle.id} référence un mouvement de paiement absent.`);
    });

    checks += 1;
    const occurrenceKeys = expenses.filter((expense) => expense.source === "recurring" && text(expense.occurrenceKey)).map((expense) => expense.occurrenceKey);
    const duplicateOccurrences = occurrenceKeys.filter((value, position) => occurrenceKeys.indexOf(value) !== position);
    if (duplicateOccurrences.length) add("error", "duplicate-occurrence", `${new Set(duplicateOccurrences).size} échéance(s) récurrente(s) sont dupliquées.`);
    const budgetKeys = expenseBudgets.map((budget) => `${budget.month}|${budget.category}`);
    const duplicateBudgets = budgetKeys.filter((value, position) => budgetKeys.indexOf(value) !== position);
    if (duplicateBudgets.length) add("warning", "duplicate-budget", `${new Set(duplicateBudgets).size} budget(s) sont définis plusieurs fois pour le même mois et la même catégorie.`);

    return {
      checks,
      issues,
      errors: issues.filter((issue) => issue.severity === "error").length,
      warnings: issues.filter((issue) => issue.severity === "warning").length
    };
  };

  root.NissaCalculations = Object.freeze({ cumulativeBonus, budgetStatus, breakEven, monthlyOccurrences, productionLotCost, weightedAverageCost, analyzeIntegrity });
})(globalThis);
