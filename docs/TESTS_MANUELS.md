# Recette manuelle — NISSA Manager

## Objectif

Cette recette protege les calculs, les donnees locales et les synchronisations entre les modules. Elle doit etre executee sur une origine locale distincte ou avec une sauvegarde JSON recente, afin de ne pas modifier les donnees d'exploitation.

## Avant chaque recette

1. Ouvrir l'application avec une base de test vide ou restauree depuis une sauvegarde de test.
2. Verifier que la version affichee dans l'en-tete, le titre de page et le cache PWA est identique.
3. Conserver une exportation JSON avant les essais d'import ou de reinitialisation.

## Navigation et affichage

- [ ] Ouvrir chaque onglet : Tableau de bord, Vendeurs, Production, Historique, Depenses, Tresorerie, Objectifs, Statistiques, Previsions, Rapports et Parametres.
- [ ] Verifier le titre, le sous-titre et le contenu de chaque vue.
- [ ] Verifier l'utilisation au clavier : navigation vers les onglets et activation par Entree ou Espace.
- [ ] Verifier le rendu sur mobile et ordinateur.

## Journee et depenses

- [ ] Enregistrer une journee avec CV, QN et depenses ; verifier CA, benefice et caisse.
- [ ] Modifier puis supprimer une journee non liee a un cycle deja paye.
- [ ] Ajouter, modifier et supprimer une depense manuelle ; verifier les totaux du jour et du mois.
- [ ] Verifier que les statistiques et le rapport mensuel reprennent les montants attendus.

## Vendeurs, cycles et salaires

- [ ] Dans l'onglet Vendeurs, creer un vendeur de test avec date d'entree et salaire de base ; verifier qu'il apparait dans l'equipe.
- [ ] Enregistrer une vente test (par exemple 120 CV et 80 QN) ; verifier le CA, les couts directs, le benefice et la presence correspondante dans Historique et Depenses.
- [ ] Creer un cycle avec 2 ventes a des dates distinctes, puis supprimer depuis Historique une journee non payee ; verifier que la vente et sa depense associee disparaissent, et que le cycle revient a 1/26 journee.
- [ ] Re-saisir la vente supprimee ; verifier que le cycle revient a 2/26 et que les montants sont recalcules.
- [ ] Enregistrer une absence a une date libre ; verifier qu'elle est comptee comme absence et ne fait pas progresser les jours travailles.
- [ ] Enregistrer 24 autres ventes a des dates distinctes ; verifier le passage du cycle a 26/26, son statut « A payer », le salaire historique applique et le cumul des primes correspondant aux seuils.
- [ ] Avant le paiement, ouvrir Tresorerie et initialiser un solde de test ; revenir dans Vendeurs, choisir « Payer » et confirmer la demande.
- [ ] Verifier que le cycle passe a « Paye », que le montant du salaire diminue le solde theorique d'une seule fois et qu'une sortie « Salaires » associee au cycle apparait dans Tresorerie.
- [ ] Verifier qu'aucun bouton « Payer » n'est disponible apres paiement ; le total des mouvements ne doit contenir qu'une sortie associee a ce cycle.
- [ ] Sur une autre journee du cycle paye, tenter la suppression depuis Historique et confirmer la demande ; verifier que l'application refuse la suppression et conserve journee, vente et depense. Executer ce point uniquement sur les donnees de test exportees.

## Sauvegarde, import et PWA

- [ ] Exporter JSON apres le scenario vendeur ; ouvrir le fichier et verifier les champs `version`, `sellers`, `sellerSales`, `sellerCycles`, `sellerAbsences`, `expenses`, `treasury`, `goals`, `settings` et `records`.
- [ ] Ouvrir une origine de test vierge (port local distinct ou profil navigateur temporaire), importer le JSON exporte et verifier l'etat « Import JSON termine ».
- [ ] Comparer les totaux vendeur, le nombre de cycles, les depenses et la sortie de salaire apres import avec la sauvegarde exportee.
- [ ] Avant chaque reinitialisation, exporter le jeu de test. Choisir « Reinitialiser l'historique », confirmer, puis verifier que journees, ventes vendeur, cycles, absences et depenses associees sont effaces, tandis que les fiches vendeurs et leur historique de salaire restent.
- [ ] Restaurer ensuite la sauvegarde de test, exporter une copie de secours, choisir « Reinitialisation complete », confirmer, puis verifier que journees, depenses, tresorerie, objectifs, vendeurs et parametres reviennent a l'etat initial. Ne jamais executer sur des donnees de production.
- [ ] Fermer puis rouvrir l'application hors ligne apres un premier chargement en ligne.
- [ ] Verifier que la version de cache se renouvelle apres une mise a jour.

## Fiabilisation des données — v2.8.0 maintenue en v2.15.4

À exécuter sur une origine de test distincte et des données fictives uniquement.

- [ ] Exporter un JSON et vérifier `schemaVersion` (`1.0.0`), `appVersion` (`v2.15.4`), `exportedAt` ISO et `includedKeys` avec les clés locales attendues.
- [ ] Importer une ancienne sauvegarde sans métadonnées : vérifier l'avertissement de compatibilité, la demande de confirmation et la conservation des clés absentes.
- [ ] Importer un JSON partiel valide (par exemple `settings` seulement) : confirmer et vérifier que seuls les paramètres sont remplacés et que les autres données restent inchangées.
- [ ] Importer un JSON à métadonnées incomplètes, une clé inconnue, ou une section de mauvais type : vérifier le refus et l'absence de changement de données.
- [ ] Importer un JSON valide : vérifier la confirmation, le téléchargement préalable d'un fichier de secours horodaté, puis la restauration des sections listées.
- [ ] Avant suppression d'une journée avec vente vendeur, d'une dépense ou d'un mouvement de trésorerie, vérifier le téléchargement du secours avant l'effacement ; annuler ensuite la confirmation pour garder le jeu de test.
- [ ] Pour chacune des trois options de réinitialisation, vérifier le secours horodaté avant de poursuivre ; annuler la boîte de confirmation pour conserver les données de test.
- [ ] Initialiser la trésorerie à 500, enregistrer une journée avec CA 100, dépenses 40 et caisse 60, puis une entrée manuelle de 20 : le rapprochement doit afficher caisse historique 560, solde théorique 580, écart +20, mouvements manuels nets +20 et différence de calcul 0.
- [ ] Confirmer que l'explication indique que les soldes ne s'additionnent pas et que la trésorerie théorique inclut déjà CA, dépenses et mouvements manuels.

## Exploitation vendeurs et rapports — v2.9.0

À exécuter après le scénario vendeur de 26 journées ci-dessus, avec au moins deux vendeurs et des moyennes quotidiennes différentes.

- [ ] Ouvrir Rapports et choisir le mois des ventes : vérifier le classement par moyenne quotidienne, le nombre de ventes, le CA et la marge brute `CA − coûts directs` pour chaque vendeur.
- [ ] Recalculer manuellement une ligne vendeur depuis `nissa_seller_sales` et vérifier l’égalité des jours, ventes, moyenne, CA et marge brute.
- [ ] Vérifier que le rapport de paie liste les cycles rattachés au mois, leur base, prime cumulée, total dû et statut.
- [ ] Avant paiement, vérifier que le total « Rémunérations dues » reprend uniquement les cycles « À payer ».
- [ ] Payer un cycle et vérifier que « Paiements effectués » et « Sorties de trésorerie liées » reprennent exactement la sortie `nissa_treasury` portant le même `cycleId`.
- [ ] Revenir dans Vendeurs : vérifier que le bouton Payer a disparu. Tenter aussi un second paiement par le même parcours et confirmer qu’aucune seconde sortie n’est créée.
- [ ] Dans Trésorerie, vérifier que la sortie liée n’est pas modifiable et affiche « Paiement verrouillé » avec l’identifiant du cycle.
- [ ] Cliquer « Annuler le paiement », annuler d’abord la confirmation et vérifier que rien ne change. Recommencer, confirmer la sauvegarde et l’annulation : le cycle doit redevenir « À payer » et pouvoir être payé de nouveau.
- [ ] Exporter en Excel compatible puis ouvrir l’impression PDF : vérifier la présence des sections Performance vendeurs, Paie vendeurs et Trésorerie avec les mêmes totaux que l’aperçu.
- [ ] Exporter le JSON et vérifier que `includedKeys` contient toujours `nissa_sellers`, `nissa_seller_sales`, `nissa_seller_cycles`, `nissa_seller_absences` et `nissa_treasury`, et que les sections correspondantes sont présentes.
- [ ] Importer cette sauvegarde sur l’origine de test et comparer classement, cycles, primes, paiements et identifiants de mouvements avant/après import.

### Résultat ciblé du 27 octobre 2026

- [x] Chargement de `index.html` en navigateur sans erreur ni avertissement console.
- [x] Cycle de 26 jours à 200 ventes/jour : classement #1, 5 200 ventes, CA 1 248 000 Ar et marge brute 582 400 Ar concordants.
- [x] Rapport de paie avant paiement : prime 30 000 Ar et rémunération due 130 000 Ar concordantes.
- [x] Paiement de 130 000 Ar : bouton Payer supprimé, cycle « Payé », sortie de trésorerie liée marquée verrouillée et mêmes totaux dans le rapport.
- [x] Contrôle statique sans erreur d’espacement avec `git diff --check`.
- [ ] Reste à exécuter avant livraison : annulation explicite avec sauvegarde téléchargée, contrôles visuels Excel/PDF et aller-retour export/import JSON.

## Améliorations UX et performance — v2.10.0

- [x] Avec 26 journées, vérifier 25 lignes sur la première page et 1 ligne sur la seconde.
- [x] Rechercher « 26 oct. » et vérifier qu’une seule journée est rendue et annoncée.
- [x] Saisir un brouillon vendeur, recharger la page et vérifier la restauration de la date, du vendeur et des quantités.
- [x] Utiliser `Ctrl + Entrée` dans la saisie vendeur : la vente est enregistrée et le brouillon est retiré.
- [x] Utiliser `Alt + V` depuis Paramètres : la vue Vendeurs s’ouvre et la date de saisie reçoit le focus.
- [x] Vérifier que Paramètres affiche `v2.10.0` et l’état « Mode hors ligne actif » sur localhost.
- [x] Vérifier l’absence d’erreur et d’avertissement console pendant le parcours ciblé.
- [ ] Tester les flèches, Début et Fin sur les onze onglets avec plusieurs navigateurs.
- [ ] Vérifier visuellement l’historique en cartes à 320 px, 375 px et 720 px de largeur.
- [ ] Tester « Forcer la mise à jour » avec une vraie version suivante disponible, en ligne puis hors ligne.

## Compatibilité d’import — v2.10.1

- [x] Contrôle automatisé de la classification : `{ version, exportedAt }` est reconnu comme ancien format, tandis que `{ appVersion }` seul reste refusé.
- [ ] Importer une sauvegarde réelle v2.7.1 contenant `version` et `exportedAt`, sans `schemaVersion`, `appVersion` ni `includedKeys` : l’application doit afficher l’avertissement de compatibilité au lieu de « Métadonnées incomplètes ».
- [ ] Confirmer l’import après téléchargement du secours, puis comparer les sections présentes avant/après.
- [ ] Importer un fichier moderne contenant seulement `appVersion` ou seulement `includedKeys` : il doit toujours être refusé comme métadonnées incomplètes.

## Fonctions métier optionnelles — v2.11.0

- [ ] Créer une dépense récurrente au jour 31, puis générer les échéances jusqu'à un mois de février : vérifier que la date est ramenée au dernier jour du mois.
- [ ] Relancer immédiatement la génération : vérifier qu'aucune seconde dépense ne possède la même `occurrenceKey`.
- [ ] Suspendre la règle et avancer la date de génération : vérifier qu'aucune nouvelle échéance n'est créée. Supprimer ensuite la règle et vérifier que les dépenses déjà générées restent présentes.
- [ ] Définir un budget pour une catégorie et un mois de test ; vérifier les états sous budget, atteint et dépassé avec les montants restant/dépassement attendus.
- [ ] Dans Statistiques, sélectionner ce mois et recalculer manuellement le seuil à partir de la marge sur coûts directs, des charges hors coûts directs vendeur et de la paie rattachée.
- [ ] Simuler 3 500 ventes avec les règles par défaut : vérifier une prime cumulée de 30 000 Ar et l'absence de changement dans les cycles et la trésorerie.
- [ ] Exporter le JSON et vérifier `nissa_recurring_expenses` et `nissa_expense_budgets` dans `includedKeys`, avec les sections `recurringExpenses` et `expenseBudgets`.
- [ ] Importer cet export sur une origine de test et comparer règles, budgets, dépenses générées et occurrences avant/après.
- [x] Exécuter les tests purs : prime 3 500 = 30 000, budget dépassé, seuil à 500 000 et récurrence fin de mois sans doublon.
- [x] Vérifier la syntaxe JavaScript intégrée et l'absence d'erreur d'espacement dans le patch.

## Production par lot — v2.12.0

- [ ] Ajouter « Lait » à 2 000 Ar/litre et « Sachet » à 50 Ar/pièce, puis acheter 20 litres et 200 sachets à ces prix.
- [ ] Créer une recette CV avec 10 litres de lait, 100 sachets, 5 000 Ar d'autres coûts et un rendement théorique de 100 unités.
- [ ] Enregistrer un lot donnant réellement 100 unités : vérifier coût total 30 000 Ar et coût unitaire 300 Ar.
- [ ] Enregistrer un second lot identique donnant 80 unités : vérifier coût unitaire 375 Ar et coût moyen pondéré du stock de 333,33 Ar.
- [ ] Enregistrer une vente de 10 CV : vérifier stock 170 et coût direct figé proche de 3 333 Ar selon l'arrondi.
- [ ] Modifier ensuite le prix du produit ou produire un nouveau lot : vérifier que le coût direct de la vente précédente ne change pas.
- [ ] Tenter une vente supérieure au stock : vérifier le refus sans création de journée, dépense ou cycle parasite.
- [ ] Supprimer la vente non payée depuis l'historique : vérifier la restauration de la quantité et de la valeur du stock.
- [ ] Vérifier qu'un lot n'ajoute pas automatiquement une dépense, afin de ne pas compter deux fois son coût avec le coût direct de vente.
- [ ] Exporter et réimporter les données ; comparer catalogue, recettes, lots, stock, coûts figés et clés `nissa_material_catalog`, `nissa_product_recipes`, `nissa_production_lots`, `nissa_product_inventory`.
- [x] Contrôle automatisé des calculs purs : lot à 30 000 Ar, coût unitaire 300 Ar et coût moyen pondéré 333,33 Ar après le second lot.
- [x] Contrôle statique de la syntaxe JavaScript et du patch.

## Achats et stock matières — v2.13.0

- [ ] Initialiser la trésorerie, puis acheter 10 litres de lait à 2 000 Ar : vérifier stock 10, valeur 20 000 Ar et diminution de trésorerie de 20 000 Ar.
- [ ] Vérifier que cet achat apparaît comme « Achat de stock » dans Dépenses mais ne diminue ni le bénéfice d'une journée ni le résultat mensuel.
- [ ] Acheter 10 litres supplémentaires à 3 000 Ar : vérifier stock 20 et coût moyen 2 500 Ar.
- [ ] Créer une recette consommant 12 litres, puis produire un lot : vérifier stock matière restant 8 litres et coût calculé à partir de 2 500 Ar/litre.
- [ ] Tenter un second lot consommant plus de 8 litres : vérifier le refus sans modification des stocks.
- [ ] Enregistrer une vente du produit fini : vérifier la marge et le coût des ventes, puis confirmer que la trésorerie ne diminue pas une seconde fois du coût automatique.
- [ ] Vérifier que les écritures « Achat de stock » et « Coût des ventes » ne proposent ni modification ni suppression depuis Dépenses.
- [ ] Exporter puis importer la sauvegarde et comparer achats, stocks matières, lots, stocks produits et soldes.
- [ ] Vérifier `nissa_material_purchases` et `nissa_material_inventory` dans `includedKeys` et dans les sections JSON.
- [x] Scénario automatisé achat → stock matière → lot → stock produit → devis de vente validé sans erreur.
- [x] Syntaxe JavaScript, références DOM, identifiants HTML et espacement du patch contrôlés.

## Stabilisation — v2.13.1

- [ ] Dans Historique, vérifier qu'une journée vendeur n'affiche plus « Modifier » et que sa suppression passe toujours par la confirmation coordonnée.
- [ ] Importer une sauvegarde moderne avec un identifiant dupliqué : vérifier le refus sans modification des données.
- [ ] Importer une recette référençant une matière absente, une vente référençant un cycle absent et une écriture système sans objet source : vérifier le refus de chaque fichier.
- [ ] Exporter puis réimporter une sauvegarde valide complète : vérifier la conservation des vendeurs, stocks, achats, recettes, lots et écritures liées.
- [ ] Acheter une matière, puis tenter de la réenregistrer avec une autre unité : vérifier que l'unité historique reste inchangée.
- [ ] Renommer ou actualiser le prix de référence d'une matière : vérifier que l'historique des achats conserve le nom et l'unité enregistrés.
- [x] Contrôle automatisé : modification directe d'une journée vendeur refusée, synchronisation interne toujours autorisée.
- [x] Contrôle automatisé : unité utilisée protégée et instantané de l'achat conservé.
- [x] Contrôle automatisé : sauvegarde valide acceptée, cycle absent et identifiant dupliqué refusés.

## Interface mobile — v2.14.0

- [ ] À 320, 375 et 430 px de largeur, ouvrir successivement les onze sections avec le sélecteur supérieur ; vérifier que le bon titre et le bon contenu apparaissent.
- [ ] Depuis le bas d’une vue longue, changer de section ; vérifier le retour fluide en haut et l’absence de contenu intermédiaire restant affiché.
- [ ] Saisir du texte et des nombres dans Vendeurs, Production, Dépenses et Paramètres sur iPhone ou Safari mobile ; vérifier qu’aucun zoom automatique n’est déclenché.
- [ ] Vérifier qu’aucun panneau, bouton, formulaire ou indicateur ne dépasse horizontalement de l’écran.
- [ ] Dans les tableaux de Production, Dépenses, Trésorerie et Rapports, balayer horizontalement sans déplacer toute la page ; vérifier que toutes les colonnes restent accessibles.
- [ ] Dans Historique, vérifier que chaque journée reste affichée en carte lisible, sans défilement horizontal.
- [ ] Activer la préférence système « Réduire les animations » et vérifier que le changement de section devient immédiat.
- [ ] Repasser au-dessus de 960 px et vérifier la navigation latérale complète, la disparition du sélecteur mobile et l’absence de régression sur ordinateur.

## Diagnostic d’intégrité — v2.15.0

- [ ] Dans Paramètres, lancer « Vérifier les données » sur une sauvegarde valide : vérifier l’état vert, le nombre de contrôles et le volume de stockage.
- [ ] Exporter la sauvegarde, créer uniquement sur une origine de test un cycle payé sans mouvement de trésorerie, réimporter si le validateur l’autorise, puis vérifier que le diagnostic signale le paiement manquant.
- [ ] Sur un jeu de test construit pour le diagnostic, vérifier la détection d’un double paiement portant le même `cycleId`.
- [ ] Vérifier la détection d’une vente sans cycle, d’une dépense de vente sans vente source et d’un achat sans écriture liée.
- [ ] Vérifier la détection d’une recette ou d’un lot référençant une matière absente.
- [ ] Vérifier que le diagnostic ne modifie aucune clé locale en comparant deux exports réalisés avant et après son exécution, hors champ `exportedAt`.
- [x] Contrôle automatisé : jeu cohérent accepté sans erreur ni avertissement.
- [x] Contrôle automatisé : double paiement simulé correctement détecté.
- [x] Syntaxe JavaScript, identifiants HTML et espacement du patch contrôlés.

## Identité visuelle — v2.15.1

- [ ] Vérifier le nouveau logo dans la navigation de bureau et l’en-tête mobile.
- [ ] Vérifier le favicon après rechargement complet de la page.
- [ ] Réinstaller la PWA sur un appareil de test et vérifier les icônes 192 × 192 et 512 × 512.
- [ ] Sur iPhone ou iPad, utiliser « Sur l’écran d’accueil » et vérifier l’icône Apple.
- [x] Vérifier automatiquement les dimensions et le format PNG des deux icônes.

## Export PDF mobile — v2.15.2

- [ ] Sur Android, ouvrir Rapports, choisir un mois et toucher « Créer le PDF » ; vérifier l’ouverture du dialogue système sans nouvelle fenêtre.
- [ ] Choisir « Enregistrer au format PDF », ouvrir le fichier obtenu et vérifier toutes les sections du rapport.
- [ ] Sur iPhone ou iPad, ouvrir l’aperçu d’impression puis utiliser « Partager » pour enregistrer le PDF dans Fichiers.
- [ ] Annuler le dialogue d’impression et vérifier le retour immédiat à la section Rapports.
- [ ] Vérifier sur ordinateur que l’impression A4 affiche les tableaux sans l’interface latérale.
- [ ] Vérifier un rapport long sur plusieurs pages : aucune ligne ne doit être coupée horizontalement.
- [x] Vérifier la syntaxe JavaScript, les références DOM et l’équilibre du CSS d’impression.

## Import JSON mobile — v2.15.3

- [ ] Sur le mobile concerné, forcer la mise à jour puis importer une sauvegarde réelle v2.7.1.
- [ ] Vérifier que l’avertissement de compatibilité ancienne s’affiche avant confirmation.
- [ ] Confirmer l’import et comparer historique, vendeurs, dépenses et trésorerie.
- [ ] Importer un fichier volontairement invalide et vérifier que le message complet reste visible.
- [x] Vérifier statiquement qu’aucun appel à `Object.hasOwn` ne subsiste dans l’application.
- [x] Vérifier la classification des sauvegardes anciennes et modernes avec la fonction de propriété compatible.

## Secours autonome mobile — v2.15.4

- [ ] Sur le mobile concerné, installer ou ouvrir `v2.15.4`, vérifier la version active puis importer l’ancienne sauvegarde.
- [ ] Vérifier ensuite Vendeurs, Production, Budgets, Seuil de rentabilité et Diagnostic d’intégrité.
- [ ] Tester volontairement une copie locale sans le dossier `js` : l’application doit rester utilisable grâce au secours intégré.
- [x] Contrôle automatisé : API complète disponible sans charger le fichier externe.
- [x] Contrôle automatisé : fichier externe et secours chargés ensemble sans conflit.

## Resultat de recette du 21 octobre 2026

- [x] Affichage de la version `v2.7.1` et navigation des dix vues principales.
- [x] Ajout d'un vendeur et enregistrement d'une vente individuelle de test.
- [x] Synchronisation verifiee : vente vendeur → historique → depense automatique → calcul du benefice.
- [x] Cycle de 26 journees termine : statut « A payer », prime cumulative et remuneration due verifies.
- [x] Initialisation de la tresorerie de test et affichage du solde theorique verifies.
- [x] Demande de confirmation affichee avant la creation du paiement de salaire.
- [x] Paiement de test confirme : une unique sortie « Salaires » de 130 000 Ar est creee et le cycle passe a « Paye ».
- [x] Protection contre le double paiement verifiee : le bouton de paiement disparait apres le premier paiement.
- [x] Export JSON verifie : sauvegarde `v2.7.1` contenant vendeurs, 26 ventes, cycle, depenses et mouvement de tresorerie.
- [x] Import JSON verifie : la restauration de la sauvegarde de recette se termine sans erreur.
- [x] Protection de suppression revue dans le code : une vente liee a un cycle « Paye » est refusee avant toute suppression de donnees.
- [x] Aucun avertissement ni erreur dans la console durant ce parcours.
- [ ] Reste a executer : essai manuel de la suppression protegee, avec confirmation explicite juste avant l'action.

## Contrôle statique de version — v2.15.4

- [x] `app-version.js` contient l’unique valeur exécutable `v2.15.4`.
- [x] L’en-tête, le titre, les rapports, les exports JSON et le cache PWA lisent cette même valeur.
- [x] README, CHANGELOG, TODO et architecture identifient `v2.15.4` comme version actuelle.
