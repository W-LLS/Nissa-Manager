# Changelog

Toutes les modifications notables de NISSA Manager sont documentees ici.

Le projet suit le versionnement semantique :

```text
MAJEURE.MINEURE.CORRECTIF
```

Exemples :

- `v2.1.0` : nouvelle fonctionnalite importante.
- `v2.1.1` : correction de bugs.
- `v2.1.2` : petites ameliorations.
- `v2.2.0` : nouveau module.
- `v3.0.0` : evolution majeure de l'application.

## [v2.15.4] - 2026-10-29

### Corrige

- Ajout d’un moteur de calcul de secours directement dans `index.html` lorsque `js/business-calculations.js` n’est pas disponible sur mobile.
- L’import, les primes, budgets, seuils, productions et diagnostics restent fonctionnels même avec un dossier `js` absent ou un ancien cache incomplet.
- Le module externe reste prioritaire lorsqu’il est présent et expose l’API complète.

## [v2.15.3] - 2026-10-29

### Corrige

- Import des anciennes sauvegardes rendu compatible avec les navigateurs mobiles ne prenant pas en charge `Object.hasOwn`.
- Vérification des sections JSON remplacée par une méthode historique sûre basée sur `hasOwnProperty.call`.
- Les erreurs d’import restent affichées afin de pouvoir lire et transmettre le diagnostic complet.

## [v2.15.2] - 2026-10-29

### Corrige

- Export PDF mobile exécuté depuis la page active au lieu d’une nouvelle fenêtre bloquante.
- Mise en page A4 dédiée avec tableaux compacts, sauts de page et masquage de l’interface pendant l’impression.
- Indication mobile pour choisir « Enregistrer au format PDF » ou « Partager » dans le dialogue système.
- Retour automatique à la vue Rapports après impression ou annulation.

## [v2.15.1] - 2026-10-29

### Ameliore

- Identité visuelle remplacée par le nouveau logo NISSA fourni.
- Logo appliqué à la navigation de bureau, à l’en-tête mobile, au favicon, à l’icône Apple et aux icônes PWA 192/512.
- Cache PWA renouvelé par la source unique de version.

## [v2.15.0] - 2026-10-29

### Ajoute

- Diagnostic d’intégrité en lecture seule depuis Paramètres.
- Contrôles des identifiants, relations vendeurs/cycles, paiements, coûts liés aux ventes, achats matières, recettes, lots et stocks.
- Détection des doubles paiements, doubles journées vendeur, doublons d’échéances récurrentes et budgets dupliqués.
- Validation de la sauvegarde complète et contrôle de la structure des clés `localStorage`.
- Affichage du volume de stockage utilisé et avertissement à l’approche de 4 Mo.

### Fiabilise

- Fonction pure `analyzeIntegrity` ajoutée aux calculs testables, sans correction automatique ni modification des données.

## [v2.14.0] - 2026-10-29

### Ameliore

- Navigation mobile remplacée par un sélecteur de section compact, accessible et toujours visible en haut de l’écran.
- Changement de section synchronisé avec le titre, l’état actif et un retour fluide en haut de page.
- Mise en page resserrée pour les écrans de 320 à 430 px : panneaux, indicateurs, formulaires, actions et graphiques.
- Champs de saisie maintenus à 16 px sur mobile afin d’éviter le zoom automatique des navigateurs mobiles.
- Tableaux volumineux rendus défilables horizontalement sans agrandir toute la page ; historique conservé sous forme de cartes.
- Transitions courtes entre les vues, automatiquement désactivées lorsque la réduction des animations est demandée.

## [v2.13.1] - 2026-10-29

### Stabilise

- Modification directe interdite pour les journées agrégées depuis les ventes vendeurs ; les corrections passent désormais par les données sources afin de préserver stock, cycles, dépenses et marges.
- Protection ajoutée dans la couche `Store`, au-delà du seul verrou visuel de l'historique.
- Validation relationnelle des imports modernes : identifiants stables et uniques, références vendeurs/cycles, matières/recettes/lots/stocks et écritures liées.
- Les achats de matières conservent désormais un instantané du nom et de l'unité pour garantir un historique lisible malgré les évolutions du catalogue.
- L'unité d'une matière déjà utilisée dans une recette, un achat ou un stock ne peut plus être modifiée implicitement.

## [v2.13.0] - 2026-10-28

### Ajoute

- Enregistrement des achats de matières avec date, quantité, coût unitaire et coût total.
- Stock de matières valorisé au coût moyen pondéré et consommé par les recettes lors de la production.
- Historique immuable des achats, relié à une écriture de décaissement identifiable.

### Corrige

- Les coûts automatiques des ventes restent utilisés pour la marge, mais ne diminuent plus la trésorerie une seconde fois.
- Les achats de matières diminuent la trésorerie, mais ne sont pas ajoutés une seconde fois aux charges du compte de résultat.
- Le rapprochement explique désormais le décalage entre achats de stock payés et coût des produits vendus.

### Fiabilise

- Une production est refusée si le stock d'une matière de la recette est insuffisant.
- Les achats et stocks matières sont inclus dans les sauvegardes JSON sans modification de `nissa_data`.

## [v2.12.0] - 2026-10-28

### Ajoute

- Vue Production avec catalogue des matières, recettes théoriques, lots et stock valorisé.
- Calcul du coût unitaire réel par lot à partir du coût total et de la quantité effectivement obtenue.
- Coût moyen pondéré par produit, mis à jour à chaque nouveau lot.
- Contrôle du stock avant vente et coût appliqué figé dans chaque nouvelle vente vendeur.

### Fiabilise

- Restauration valorisée du stock lors de la suppression d'une vente non payée ou de la réinitialisation de l'activité.
- Historique des lots immuable avec prix et quantités de matières figés.
- Sauvegardes étendues au catalogue, aux recettes, aux lots et au stock, sans modification de `nissa_data`.
- Anciens champs de matières conservés pour compatibilité mais retirés de l'interface au profit du module Production réellement utilisé.

## [v2.11.0] - 2026-10-28

### Ajoute

- Dépenses récurrentes mensuelles avec génération explicite, prévention des doublons, suspension et traçabilité de l'occurrence créée.
- Budgets mensuels par catégorie avec consommé, restant, taux d'utilisation et signalement des dépassements.
- Calcul du seuil de rentabilité mensuel à partir du chiffre d'affaires, des coûts directs, des charges d'exploitation et de la paie.
- Simulateur de primes vendeurs sans écriture dans les cycles ni dans la trésorerie.

### Fiabilise

- Calculs purs de prime cumulative, budget, seuil de rentabilité et occurrences mensuelles extraits dans `js/business-calculations.js`.
- Sauvegardes JSON étendues aux clés `nissa_recurring_expenses` et `nissa_expense_budgets`, sans modification de `nissa_data`.

## [v2.10.1] - 2026-10-27

### Corrige

- Les sauvegardes v2.7.1 contenant `version` et `exportedAt`, mais pas les métadonnées introduites en v2.8.0, sont de nouveau reconnues comme sauvegardes anciennes compatibles.
- Les sauvegardes modernes qui contiennent seulement une partie de `schemaVersion`, `appVersion` ou `includedKeys` restent refusées.

## [v2.10.0] - 2026-10-27

### Ajoute

- Brouillon local restaurable pour la saisie quotidienne vendeur, avec bouton d’effacement.
- Raccourcis `Ctrl/⌘ + Entrée` pour enregistrer et `Alt + V` pour ouvrir la saisie vendeurs.
- Recherche, filtre mensuel et pagination 25/50/100 lignes dans l’historique.
- Affichage de la version active et bouton de mise à jour forcée dans Paramètres.
- Navigation clavier par flèches, Début et Fin dans les onglets principaux.

### Ameliore

- Version applicative centralisée dans `app-version.js`, partagée par l’interface, les rapports, les sauvegardes et le cache PWA.
- Historique rendu par page depuis les données déjà en mémoire afin de limiter le coût DOM et les accès au stockage.
- Historique présenté en cartes lisibles sur petit écran, défilement tactile amélioré pour les autres tableaux et focus renforcé.
- Zones de résultat et d’état rendues annonçables aux technologies d’assistance.

## [v2.9.0] - 2026-10-27

### Ajoute

- Rapport mensuel « performance vendeurs » avec volumes, moyenne quotidienne, classement, chiffre d’affaires et marge brute sur coûts directs.
- Rapport mensuel « paie vendeurs » avec cycles, primes cumulées, rémunérations dues, paiements et sorties de trésorerie liées.
- Présence des rapports vendeurs dans l’aperçu, l’export Excel compatible et l’impression PDF.

### Fiabilise

- Verrouillage des cycles payés par statut, identifiant de mouvement et référence réelle dans `nissa_treasury`.
- Modification interdite pour une sortie de salaire liée ; son annulation exige une suppression explicite avec sauvegarde préalable.
- Sélection mensuelle étendue aux ventes, cycles et paiements vendeurs, même sans journée historique sur le mois.
- Export JSON complet maintenu avec toutes les clés vendeurs et trésorerie nécessaires au rapprochement.

## [v2.8.0] - 2026-10-27

### Ajoute

- Métadonnées de schéma et de version dans les sauvegardes JSON.
- Validation centralisée des imports, détection des sections manquantes et conservation des catégories absentes.
- Sauvegarde de secours horodatée avant import, réinitialisation et suppressions.
- Vue de rapprochement entre caisse historique et trésorerie théorique.
- Documentation des relations vendeurs, ventes, cycles, paiements et trésorerie.

### Sécurité des données

- Les imports invalides sont refusés avant toute modification ; un import valide demande confirmation.

## [v2.7.2] - 2026-10-27

### Corrige

- Alignement de la version affichee dans l'application, les rapports, les exports JSON et le cache PWA.
- Documentation projet alignee sur la version actuelle et la stabilisation de la branche `v2.7.x`.

### Ameliore

- Recette manuelle de non-regression detaillee pour les ventes vendeurs, les cycles, les paiements, les sauvegardes et les actions de suppression.

## [v2.7.1] - 2026-09-22

### Corrige

- Synchronisation des ventes vendeur avec l’historique, les dépenses et les paiements de salaires.
- Suppression d’une vente vendeur depuis l’historique.

## [v2.7.0] - 2026-09-12

### Ajoute

- Gestion de vendeurs actifs ou inactifs, historique de salaire et performance individuelle.
- Cycles de 26 journées travaillées, avec rattachement automatique des journées de rattrapage au cycle précédent.
- Ventes individuelles, classement par moyenne quotidienne et visibilité sur la marge brute des coûts directs.
- Règles de primes cumulatives configurables depuis l’interface.
- Rémunérations dues, paiement unique par cycle et sortie de trésorerie `Salaires` associée.

### Compatibilite

- Les données v2.6.0 restent inchangées ; les nouveaux enregistrements utilisent des clés localStorage distinctes.
- Les exports/imports JSON incluent désormais les vendeurs, ventes individuelles et cycles.

## [v2.6.0] - 2026-08-15

### Ajoute

- Module de suivi de tresorerie.
- Initialisation de la tresorerie a partir d'un solde reel et d'une date de depart.
- Gestion des entrees, sorties exceptionnelles et corrections de tresorerie.
- Historique des mouvements et graphique d'evolution.
- Objectifs mensuels de chiffre d'affaires, ventes et benefice.
- Plafond mensuel de depenses, progression et effort restant.

### Change

- Tableau de bord enrichi avec le suivi des objectifs.
- Rapports mensuels enrichis avec objectifs et synthese de tresorerie.
- Export JSON etendu a la tresorerie et aux objectifs.
- Cache PWA aligne sur la version `v2.6.0`.

### Compatibilite

- Compatibilite maintenue avec les donnees et sauvegardes v2.4.x et v2.5.x.
- Conservation des cles `nissa_data`, `nissa_settings` et `nissa_expenses`.
- Structure historique des journees et champ `caisse` inchanges.

## [v2.5.0] - 2026-08-14

### Ajoute

- Gestion detaillee des depenses.
- Categories de depenses.
- Historique des depenses avec modification, suppression et filtres.
- Statistiques par categorie et comparaison mensuelle des charges.
- Repartition des depenses dans les rapports.

### Change

- Synchronisation automatique entre depenses detaillees et journees.
- Export JSON et restauration globale etendus aux depenses.
- Statistiques de depenses et tableau de bord ameliores.
- Cache PWA aligne sur la version `v2.5.0`.

### Compatibilite

- Migration automatique et anti-double des depenses historiques.
- Compatibilite avec les sauvegardes v2.4.x.
- Conservation des cles `nissa_data` et `nissa_settings` et de la structure des journees.

## [v2.4.3] - 2026-08-02

### Corrige

- Application effective du theme sombre depuis les parametres d'apparence.
- Mise a jour dynamique de la couleur de theme du navigateur avec la couleur principale configuree.
- Protection du formulaire Parametres pendant la saisie afin d'eviter l'ecrasement des champs en cours d'edition.
- Alignement des versions affichees dans l'application, les exports et le cache PWA.

### Note

- Les parametres restent centralises sous la cle `nissa_settings`.
- La structure des journees enregistrees reste inchangee.
- Aucun nouveau module metier n'a ete ajoute.

## [v2.4.2] - 2026-08-01

### Corrige

- Validation renforcee des parametres charges depuis `localStorage` et depuis les imports JSON.
- Normalisation des journees importees sans modifier la structure historique.
- Protection contre la desactivation simultanee des produits CV et QN.
- Alignement des versions affichees dans l'application, les exports et le cache PWA.

### Ameliore

- Les valeurs invalides des parametres sont remplacees par des valeurs stables.
- Les imports JSON sans parametres ni historique valides sont refuses proprement.

### Note

- Les parametres restent stockes sous la cle `nissa_settings`.
- L'historique reste stocke sous la cle `nissa_data`.
- La structure des journees enregistrees reste inchangee.

## [v2.4.1] - 2026-08-01

### Ajoute

- Refonte complete du module Parametres.
- Objet unique de configuration `settings` sous la cle `nissa_settings`.
- Configuration Entreprise, Produits, Matieres premieres, Previsions, Sauvegarde, Apparence et Donnees.
- Export JSON et import JSON regroupes dans Parametres.
- Reinitialisation des parametres, de l'historique et de l'ensemble des donnees.

### Change

- Les prix et couts produits sont lus depuis les parametres.
- La devise est lue depuis les parametres.
- Les previsions utilisent la periode moyenne, les jours ouvres et les objectifs configures.
- Les calculs de journee integrent les couts produits configures dans les depenses.

### Note

- Les parametres ne contiennent aucun resultat metier.
- La structure des journees enregistrees reste inchangee.
- Le stockage historique `nissa_data` reste compatible.

## [v2.4.0] - 2026-07-02

### Ajoute

- Premiere version PWA installable.
- Manifeste `manifest.webmanifest`.
- Service worker `service-worker.js`.
- Cache hors ligne des fichiers principaux.
- Icones PWA dans `assets/`.
- Balises PWA dans `index.html`.

### Note

- La logique applicative reste dans `index.html`.
- La structure des journees enregistrees reste inchangee.
- Le stockage `localStorage` sous la cle `nissa_data` reste compatible.

## [v2.3.0] - 2026-07-02

### Ajoute

- Module Rapports.
- Rapport mensuel avec selection du mois.
- Synthese mensuelle : CA, benefice, depenses, marge, CV, QN et total glaces.
- Detail des journees du mois selectionne.
- Export Excel compatible au format `.xls`.
- Export PDF via la fenetre d'impression du navigateur.

### Note

- Les exports sont generes entierement hors ligne.
- La structure des journees enregistrees reste inchangee.
- Le stockage `localStorage` sous la cle `nissa_data` reste compatible.

## [v2.2.0] - 2026-07-02

### Ajoute

- Module Previsions avancees.
- Intelligence metier basee sur l'historique local.
- Production conseillee avec repartition CV/QN.
- Projection du CA, du benefice et des volumes.
- Projection commerciale sur 7 jours et 30 jours.
- Analyse des tendances recentes.
- Identification des periodes fortes.
- Recommandations operationnelles.

### Note

- La structure des journees enregistrees reste inchangee.
- Le stockage `localStorage` sous la cle `nissa_data` reste compatible.

## [v2.1.0] - 2026-07-02

### Ajoute

- Version de reference avec tableau de bord, module Journee et historique local.
- Statistiques avancees : CA total, benefice total, depenses totales, marge globale, moyennes CA et benefice.
- Totaux produits : CV, QN et total glaces.
- Graphiques integres : evolution CA, evolution benefice, evolution ventes et repartition CV/QN.
- Comparaison mensuelle : CA, benefice, glaces, meilleur mois, pire mois et evolution en pourcentage.
- Documentation projet : `README.md`, `docs/ARCHITECTURE.md`, `docs/TODO.md`.
- Changelog projet.

### Corrige

- Les statistiques de benefice conservent les valeurs negatives au lieu de les ramener a zero.

### Note

- La structure des journees enregistrees reste compatible avec les anciennes donnees.
- Le projet reste volontairement dans le fichier unique `index.html`.
- La notion de cycle de travail a ete remplacee par une organisation en versions logicielles.

## [v3.0.0] - Prevue

### Objectif

- Prochaine version majeure a definir apres stabilisation de `v2.7.x`.
- Aucun nouveau module ne doit etre engage avant validation complete du module Parametres.
