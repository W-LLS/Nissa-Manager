# Architecture NISSA Manager v2.6.0

## Etat actuel

NISSA Manager v2.6.0 est une application web hors ligne en vanilla HTML, CSS et JavaScript.

Le projet contient actuellement une application complete dans `index.html` :

- CSS integre dans la balise `<style>`.
- Structure HTML des vues dans le `<body>`.
- Template HTML du formulaire de journee via `<template id="journeeFormTemplate">`.
- JavaScript integre dans la balise `<script>`.
- Persistance locale via `localStorage`.

La logique applicative reste dans `index.html`. La version PWA ajoute les fichiers techniques necessaires a l'installation : `manifest.webmanifest`, `service-worker.js` et les icones dans `assets/`.

## Versionnement

Le projet suit le versionnement semantique :

```text
MAJEURE.MINEURE.CORRECTIF
```

Versions planifiees :

- `v2.1.0` : statistiques avancees.
- `v2.2.0` : previsions avancees et intelligence metier.
- `v2.3.0` : exports PDF, Excel compatible et rapport mensuel.
- `v2.4.0` : premiere version PWA installable.
- `v2.4.1` : refonte du module Parametres.
- `v2.4.2` : stabilisation du module Parametres.
- `v2.4.3` : stabilisation UX du module Parametres.
- `v2.5.0` : gestion avancee des depenses et migration compatible v2.4.x.
- `v2.6.0` : tresorerie theorique et objectifs mensuels.
- `v3.0.0` : prochaine version majeure a definir apres stabilisation.

Chaque developpement doit mettre a jour :

- la version affichee dans l'application ;
- `CHANGELOG.md` ;
- `docs/TODO.md` ;
- les rapports de fin.

## Architecture generale

L'application est organisee autour de vues affichees par onglets :

- Tableau de bord
- Journee
- Historique
- Depenses
- Tresorerie
- Objectifs
- Statistiques
- Previsions
- Rapports
- Parametres

La navigation active ou masque les sections avec la classe CSS `.active`.

Le flux principal est :

1. L'utilisateur saisit les ventes CV, QN et les depenses.
2. Le module Journee calcule les totaux.
3. Le module Store enregistre la journee.
4. Les donnees sont ecrites dans `localStorage`.
5. Le tableau de bord, l'historique, les statistiques, les previsions et les rapports sont rendus a nouveau.

## Modules JavaScript actuels

### Utils

Responsabilites :

- cle de stockage `nissa_data` ;
- date du jour au format ISO ;
- conversion numerique securisee ;
- formatage des nombres, montants et dates ;
- lecture et ecriture de `localStorage` ;
- tri des journees ;
- calcul d'une journee.

Ce module pourra etre deplace plus tard dans `js/utils.js`.

### Settings

Responsabilites :

- cle de stockage `nissa_settings` ;
- objet unique de configuration `settings` ;
- valeurs par defaut ;
- lecture et ecriture des parametres ;
- configuration entreprise, produits, matieres premieres, previsions, sauvegarde et apparence ;
- application du theme, des couleurs et de la police.

Ce module pourra etre deplace plus tard dans `js/settings.js`.

### Store

Responsabilites :

- conserver les journees en memoire pendant la session ;
- lire les donnees initiales depuis `localStorage` ;
- sauvegarder une journee ;
- vider les donnees ;
- retourner la derniere journee ;
- retourner la journee du jour.

Ce module pourra soit rester avec `Utils` au debut, soit etre extrait ensuite dans `js/store.js` si la couche de donnees grossit.

### App

Responsabilites :

- gerer la navigation entre les vues ;
- mettre a jour le titre de page et le sous-titre ;
- afficher la date du jour.

Ce module pourra etre deplace plus tard dans `js/app.js`.

### Dashboard

Responsabilites :

- afficher les KPI ;
- afficher les dernieres journees enregistrees ;
- lire les donnees depuis `Store`.

Ce module pourra etre deplace plus tard dans `js/dashboard.js`.

### Historique

Responsabilites :

- afficher le tableau complet des journees ;
- gerer l'etat vide ;
- gerer l'effacement de l'historique.

Ce module pourra etre deplace plus tard dans `js/historique.js`.

### Statistiques

Responsabilites :

- calculer les statistiques avancees ;
- afficher les totaux CV, QN et total glaces ;
- afficher les graphiques ;
- calculer la comparaison mensuelle ;
- afficher le meilleur mois, le pire mois et les evolutions.

Ce module pourra etre deplace plus tard dans `js/statistiques.js`.

### Expenses

Responsabilites :

- stockage detaille sous la cle `nissa_expenses` ;
- validation, ajout, modification et suppression des depenses ;
- filtres, statistiques par categorie et comparaison mensuelle ;
- migration anti-double des montants historiques ;
- synchronisation de `jour.depenses`, `benefice` et `caisse` avec les calculs existants.

### Treasury

Responsabilites :

- mouvements manuels sous la cle `nissa_treasury` ;
- initialisation depuis `settings.treasury.startDate` et `openingBalance` ;
- calcul parallele `solde initial + CA - depenses + entrees - sorties` depuis la date de depart ;
- preservation integrale du champ historique `caisse`.

### Goals

Responsabilites :

- objectifs uniques par mois sous la cle `nissa_goals` ;
- progression CA, ventes, benefice et utilisation du plafond de depenses ;
- effort quotidien restant avec inclusion de la journee courante ;
- statuts deterministes sans IA.

### Previsions

Responsabilites :

- calculer les previsions de production ;
- projeter le CA, le benefice et les volumes ;
- analyser les tendances recentes ;
- identifier les periodes fortes ;
- afficher des recommandations operationnelles.

Ce module pourra etre deplace plus tard dans `js/previsions.js`.

### Rapports

Responsabilites :

- generer un rapport mensuel ;
- calculer les totaux du mois selectionne ;
- afficher le detail des journees du mois ;
- exporter un fichier Excel compatible ;
- ouvrir un rapport imprimable pour export PDF.

Ce module pourra etre deplace plus tard dans `js/rapports.js`.

### Parametres

Responsabilites :

- afficher le centre de configuration ;
- modifier l'objet `settings` ;
- gerer export JSON et import JSON ;
- reinitialiser les parametres ;
- reinitialiser l'historique ;
- reinitialiser completement les donnees.

Ce module ne doit contenir que de la configuration et des actions de donnees.

### Journee

Responsabilites :

- generer les formulaires a partir du template ;
- lire les champs CV, QN et depenses ;
- mettre a jour les calculs en direct ;
- valider une journee ;
- sauvegarder via `Store` ;
- declencher le rendu global.

Ce module pourra etre deplace plus tard dans `js/journee.js`.

## Structure des donnees

Chaque journee enregistree respecte la structure suivante :

```js
{
  date,
  cv,
  qn,
  total,
  ca,
  depenses,
  benefice,
  caisse
}
```

Les champs sont numeriques sauf `date`, qui est une chaine au format `YYYY-MM-DD`.

Cette structure ne doit pas etre modifiee sans strategie de migration.

## Fonctionnement du localStorage

La cle utilisee est :

```text
nissa_data
```

La valeur stockee est un tableau JSON de journees.

Lecture :

1. Lire `localStorage.getItem("nissa_data")`.
2. Parser le JSON.
3. Retourner un tableau vide si la valeur est absente ou invalide.

Ecriture :

1. Trier ou preparer le tableau de journees.
2. Convertir en JSON avec `JSON.stringify`.
3. Ecrire avec `localStorage.setItem("nissa_data", json)`.

Cette approche fonctionne hors ligne et sans backend. Les donnees restent propres a l'appareil et au navigateur.

La cle des parametres est :

```text
nissa_settings
```

Tous les parametres sont regroupes dans un seul objet `settings`. Les parametres ne doivent jamais stocker de resultats comme le CA, le benefice, les statistiques ou l'historique.

La cle des depenses detaillees est :

```text
nissa_expenses
```

Elle contient des objets `{ id, date, category, label, amount, note }`. Le marqueur `settings.dataMigrations.expensesV250` empeche toute double migration.

Les mouvements de tresorerie manuels sont stockes sous `nissa_treasury`. Les objectifs mensuels sont stockes sous `nissa_goals`. Ces nouvelles cles ne modifient ni `nissa_data`, ni `nissa_expenses`.

## Fonctionnement PWA

La version `v2.4.0` ajoute :

- un manifeste PWA : `manifest.webmanifest` ;
- un service worker : `service-worker.js` ;
- des icones PWA dans `assets/` ;
- les balises PWA dans `index.html`.

Le service worker met en cache les fichiers principaux :

- `index.html` ;
- `manifest.webmanifest` ;
- `assets/icon-192.png` ;
- `assets/icon-512.png` ;
- `assets/icon-192.svg` ;
- `assets/icon-512.svg`.

Le service worker n'est pas enregistre quand l'application est ouverte en `file://`. Pour l'installation PWA, l'application doit etre servie depuis `localhost` ou HTTPS.

## Conventions de nommage

### HTML

- Identifiants de vues : `view-nom`.
- Boutons de navigation : attribut `data-view`.
- Zones de montage : suffixe `Mount`, par exemple `historyMount`.
- Templates : suffixe `Template`, par exemple `journeeFormTemplate`.

### CSS

- Classes en kebab-case : `.kpi-card`, `.summary-grid`, `.nav-button`.
- Variables CSS globales dans `:root`.
- Couleurs, tailles et rayons centralises dans les variables CSS.

### JavaScript

- Modules en PascalCase : `Utils`, `Store`, `App`, `Dashboard`, `Historique`, `Statistiques`, `Previsions`, `Rapports`, `Journee`.
- Fonctions et variables en camelCase : `renderAll`, `todayIso`, `formatMoney`.
- Parametres metier centralises dans `Settings`.

## Roadmap technique

### v2.4.0

- Manifeste PWA ajoute.
- Service worker ajoute.
- Application rendue installable.

### v2.4.1

- Module Parametres refondu.
- Objet `settings` centralise.
- Prix et couts produits lus depuis les parametres.
- Devise, previsions, sauvegarde et apparence configurables.

### v2.4.2

- Validation renforcee des parametres.
- Normalisation des journees importees.
- Protection contre les valeurs de configuration invalides.
- Alignement de la version des exports et du cache PWA.

### v2.4.3

- Theme sombre applique depuis les parametres d'apparence.
- Couleur de theme navigateur synchronisee avec la couleur principale.
- Formulaire Parametres protege contre les rafraichissements pendant la saisie.

### v2.5.0

- Module de gestion avancee des depenses.
- Synchronisation avec les journees, statistiques, rapports et sauvegardes.
- Migration des depenses historiques sans perte de montant.

### v2.6.0

- Tresorerie theorique initialisee a une date choisie.
- Mouvements exceptionnels et corrections explicites.
- Objectifs mensuels, progressions et effort restant.

### v3.0.0

- Perimetre a definir apres stabilisation de `v2.6.0`.
- Aucun nouveau module ne doit etre engage avant validation complete du module Parametres.

### Refactorisation future

- Extraire les styles dans `css/styles.css`.
- Extraire les fonctions utilitaires dans `js/utils.js`.
- Introduire un point d'entree `js/app.js`.
- Extraire les modules metier dans leurs fichiers dedies.
