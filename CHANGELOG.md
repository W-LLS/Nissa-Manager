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
