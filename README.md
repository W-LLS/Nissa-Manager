# NISSA Manager

Version actuelle : `v2.4.1`

NISSA Manager est un logiciel de gestion commerciale hors ligne pour une activite de vente de glaces.

L'application est developpee en HTML, CSS et JavaScript Vanilla, avec une sauvegarde locale dans le navigateur via `localStorage`. Elle ne depend d'aucun serveur, d'aucun framework et d'aucune connexion internet pour fonctionner.

La logique applicative reste volontairement dans `index.html`. La version PWA ajoute uniquement les fichiers techniques necessaires a l'installation : manifeste, service worker et icones.

## Presentation

NISSA Manager permet de suivre les ventes quotidiennes, les depenses, le chiffre d'affaires, le benefice, la caisse et les statistiques commerciales.

Le logiciel est pense pour une utilisation simple et rapide :

- saisir une journee de vente ;
- calculer automatiquement les montants ;
- consulter l'historique ;
- suivre les indicateurs principaux ;
- analyser les performances avec des statistiques et graphiques ;
- conserver les donnees directement sur l'appareil.

## Objectifs

Les objectifs du projet sont :

- creer un outil de gestion commerciale adapte a la vente de glaces ;
- garder une interface claire, rapide et autonome ;
- fonctionner entierement hors ligne ;
- eviter toute dependance technique inutile ;
- proteger la compatibilite avec les anciennes donnees ;
- avancer par versions logicielles successives ;
- respecter le versionnement semantique ;
- ajouter les fonctionnalites sans casser les calculs, le stockage ou les exports/imports futurs.

## Versionnement

Le projet utilise le versionnement semantique :

```text
MAJEURE.MINEURE.CORRECTIF
```

Regles :

- `v2.1.0` : nouvelle fonctionnalite importante.
- `v2.1.1` : correction de bugs.
- `v2.1.2` : petites ameliorations.
- `v2.2.0` : nouveau module.
- `v3.0.0` : evolution majeure de l'application.

A chaque developpement :

- la version doit etre incrementee ;
- `CHANGELOG.md` doit etre mis a jour ;
- `docs/TODO.md` doit etre mis a jour ;
- la version doit etre affichee dans l'application ;
- la version doit etre utilisee dans le rapport final.

## Architecture

L'application est actuellement monolithique :

```text
index.html
```

Le fichier contient :

- le HTML des vues ;
- le CSS integre ;
- le JavaScript integre ;
- le template du formulaire de journee ;
- les modules JavaScript internes ;
- la logique de sauvegarde `localStorage`.

Les modules JavaScript internes sont organises ainsi :

- `Utils` : formats, dates, calculs, lecture/ecriture `localStorage`.
- `Settings` : configuration centralisee, valeurs par defaut et apparence.
- `Store` : donnees en memoire, sauvegarde, suppression, acces aux journees.
- `App` : navigation par onglets et titres de page.
- `Dashboard` : KPI et dernieres journees.
- `Historique` : tableau des journees et suppression de l'historique.
- `Statistiques` : statistiques avancees, graphiques et comparaison mensuelle.
- `Previsions` : previsions avancees, projections et intelligence metier.
- `Rapports` : rapport mensuel, export Excel compatible et export PDF/impression.
- `Journee` : formulaire, calcul en direct et validation de journee.

Des dossiers de preparation existent deja pour une future separation technique :

```text
docs/
assets/
css/
js/
```

La version PWA ajoute aussi :

```text
manifest.webmanifest
service-worker.js
assets/icon-192.svg
assets/icon-512.svg
assets/icon-192.png
assets/icon-512.png
```

La separation effective du code applicatif est prevue pour une version ulterieure. Pour le moment, `index.html` reste le fichier applicatif principal.

## Fonctionnalites

Fonctionnalites disponibles en `v2.4.1` :

- tableau de bord ;
- module Journee ;
- saisie CV, QN et depenses ;
- calcul automatique du CA ;
- calcul automatique du total de glaces ;
- calcul automatique du benefice ;
- calcul automatique de la caisse ;
- historique complet des journees ;
- cloture de journee ;
- sauvegarde locale avec `localStorage` ;
- navigation par onglets ;
- KPI principaux ;
- statistiques avancees ;
- graphiques d'evolution ;
- repartition CV/QN ;
- comparaison mensuelle ;
- meilleur mois ;
- pire mois ;
- evolution mensuelle en pourcentage.
- previsions avancees ;
- intelligence metier ;
- projection de production ;
- projection CA, benefice et caisse ;
- aide a la decision.
- rapport mensuel ;
- export Excel compatible ;
- export PDF par impression navigateur ;
- selection du mois a exporter.
- application PWA installable ;
- manifeste PWA ;
- service worker ;
- cache hors ligne de l'application ;
- icones PWA.
- centre de configuration Parametres ;
- configuration entreprise ;
- produits configurables ;
- matieres premieres ;
- regles de prevision ;
- preferences de sauvegarde ;
- apparence ;
- export/import JSON et reinitialisations.

## Roadmap

### v2.1.0

- Tableau de bord.
- Module Journee.
- Historique.
- Calculs automatiques.
- Sauvegarde hors ligne.
- Statistiques avancees.
- Graphiques.
- Comparaison mensuelle.
- Documentation projet.

### v2.2.0

- Previsions de ventes.
- Analyse des tendances.
- Aide a la decision.
- Indicateurs metier avances.
- Projections sur 7 jours et 30 jours.
- Recommandations de production.

### v2.3.0

- Export PDF.
- Export Excel.
- Rapport mensuel.
- Preparation de documents exploitables.

### v2.4.0

- Installation sur appareil.
- Manifeste PWA.
- Service worker.
- Experience hors ligne renforcee.

### v2.4.1 - Version actuelle

- Refonte du module Parametres.
- Configuration centralisee dans `settings`.
- Prix, couts et devise configurables.
- Export/import JSON et reinitialisations dans Parametres.

## Guide d'installation

NISSA Manager ne necessite pas d'installation technique complexe.

### Prerequis

- Un navigateur moderne : Chrome, Edge, Firefox ou Safari.
- Le fichier `index.html`.

### Lancement

1. Ouvrir le dossier du projet.
2. Double-cliquer sur `index.html`.
3. L'application s'ouvre dans le navigateur.

Le logiciel fonctionne hors ligne. Les donnees sont stockees dans le navigateur utilise.

### Installation PWA

Pour installer NISSA Manager comme application, il faut l'ouvrir depuis une adresse locale ou web compatible avec les service workers, par exemple `localhost` ou un site HTTPS.

Une fois l'application ouverte :

1. Ouvrir le menu du navigateur.
2. Choisir l'option d'installation de l'application.
3. Confirmer l'installation.

L'application installee conserve les donnees dans le navigateur de l'appareil.

### Important

Les donnees `localStorage` sont propres :

- au navigateur ;
- a l'appareil ;
- a l'adresse locale du fichier ou du site.

Changer de navigateur ou vider les donnees du navigateur peut rendre les donnees precedentes inaccessibles.

## Guide utilisateur

### Tableau de bord

Le tableau de bord affiche les indicateurs principaux :

- CA du jour ;
- glaces vendues ;
- benefice du jour ;
- derniere cloture ;
- dernieres journees enregistrees.

Il contient aussi une saisie rapide pour valider une journee.

### Journee

Le module Journee permet de saisir :

- le nombre de CV vendus ;
- le nombre de QN vendus ;
- les depenses de la journee.

Les calculs sont effectues automatiquement :

- CA ;
- total glaces ;
- benefice ;
- caisse.

La validation ajoute la journee a l'historique.

### Historique

L'historique affiche toutes les journees enregistrees, triees de la plus recente a la plus ancienne.

Chaque ligne contient :

- date ;
- CV ;
- QN ;
- total ;
- CA ;
- depenses ;
- benefice ;
- caisse.

Un bouton permet d'effacer l'historique local.

### Statistiques

Le module Statistiques affiche :

- CA total ;
- benefice total ;
- depenses totales ;
- marge globale ;
- moyenne CA ;
- moyenne benefice ;
- total CV ;
- total QN ;
- total glaces ;
- graphiques d'evolution ;
- repartition CV/QN ;
- comparaison mensuelle.

### Previsions

Le module Previsions affiche :

- production conseillee ;
- CA prevu ;
- benefice prevu ;
- tendance des ventes ;
- projection sur 7 jours ;
- projection sur 30 jours ;
- periodes fortes ;
- recommandations operationnelles.

### Rapports

Le module Rapports permet de :

- selectionner un mois ;
- consulter une synthese mensuelle ;
- consulter le detail des journees du mois ;
- exporter un fichier Excel compatible ;
- ouvrir un rapport imprimable en PDF depuis le navigateur.

### PWA

La version `v2.4.0` permet :

- l'installation de l'application depuis un navigateur compatible ;
- le chargement des fichiers principaux depuis le cache ;
- l'utilisation renforcee hors ligne ;
- l'affichage avec une icone et un theme dedies.

### Parametres

Le module Parametres est le centre de configuration du logiciel.

Il contient uniquement des donnees de configuration :

- entreprise ;
- produits ;
- matieres premieres ;
- previsions ;
- sauvegarde ;
- apparence ;
- donnees.

Il ne contient jamais de statistiques, d'historique, de CA ou de benefices.

## Structure des donnees

Les journees sont enregistrees dans `localStorage` sous la cle :

```text
nissa_data
```

La valeur stockee est un tableau JSON.

Chaque journee conserve obligatoirement cette structure :

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

Description des champs :

- `date` : date de la journee au format `YYYY-MM-DD`.
- `cv` : nombre de CV vendus.
- `qn` : nombre de QN vendus.
- `total` : total de glaces vendues.
- `ca` : chiffre d'affaires.
- `depenses` : depenses de la journee.
- `benefice` : CA moins depenses.
- `caisse` : montant calcule pour la caisse.

Cette structure ne doit pas etre modifiee afin de garantir la compatibilite avec les anciennes donnees.

Les parametres sont enregistres dans `localStorage` sous la cle :

```text
nissa_settings
```

Ils sont regroupes dans un seul objet `settings`.

## Historique des versions

### v2.4.1 - 2026-07-03

- Version actuelle.
- Refonte du module Parametres.
- Configuration centralisee dans `settings`.
- Produits, devise, previsions, sauvegarde et apparence configurables.
- Donnees JSON et reinitialisations regroupees dans Parametres.

### v2.4.0 - 2026-07-02

- Premiere version PWA installable.
- Manifeste PWA.
- Service worker.
- Cache hors ligne des fichiers principaux.
- Icones PWA.

### v2.3.0 - 2026-07-02

- Rapport mensuel.
- Export Excel compatible.
- Export PDF par impression navigateur.
- Selection du mois a exporter.

### v2.2.0 - 2026-07-02

- Previsions avancees.
- Intelligence metier.
- Projections sur 7 jours et 30 jours.
- Recommandations de production.

### v2.1.0 - 2026-07-02

- Tableau de bord.
- Module Journee.
- Historique.
- Sauvegarde locale.
- Statistiques avancees.
- Graphiques.
- Comparaison mensuelle.
- Documentation projet.

Voir aussi `CHANGELOG.md` pour le detail des versions.

## Contribution

Les contributions doivent respecter les regles du projet :

- ne pas casser la structure des donnees ;
- ne pas modifier la cle `localStorage` sans strategie de migration ;
- conserver la compatibilite avec les anciennes donnees ;
- ne pas introduire de framework sans decision produit ;
- garder le projet fonctionnel hors ligne ;
- eviter les refactorisations non demandees ;
- tester les calculs avant livraison ;
- incrementer la version selon le versionnement semantique ;
- documenter les changements dans `CHANGELOG.md` ;
- mettre a jour `docs/TODO.md`.

Avant toute modification importante, consulter :

- `docs/ARCHITECTURE.md` ;
- `docs/TODO.md` ;
- `CHANGELOG.md`.

## Licence

Projet proprietaire.

Tous droits reserves, sauf decision contraire du proprietaire du projet.
