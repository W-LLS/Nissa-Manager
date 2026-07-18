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

## [v2.4.1] - 2026-07-03

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
