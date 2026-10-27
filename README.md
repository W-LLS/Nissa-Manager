# NISSA Manager

Version actuelle : `v2.10.1`

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
- la recette de `docs/TESTS_MANUELS.md` doit etre executee avant une livraison majeure ;
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
- `Sellers` : vendeurs, ventes individuelles, cycles de salaire, primes et paiements.
- `Expenses` : depenses detaillees, migration et synchronisation.
- `Treasury` : tresorerie theorique et mouvements exceptionnels.
- `Backup` : format de sauvegarde JSON, validation des imports et export de secours.
- `Goals` : objectifs mensuels, progression et effort restant.

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
app-version.js
assets/icon-192.svg
assets/icon-512.svg
assets/icon-192.png
assets/icon-512.png
```

La separation effective du code applicatif est prevue pour une version ulterieure. Pour le moment, `index.html` reste le fichier applicatif principal.

## Fonctionnalites

Fonctionnalites disponibles en `v2.10.1` :

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
- gestion detaillee des depenses par categorie ;
- ajout, modification, suppression et filtres de depenses ;
- statistiques et comparaison mensuelle des depenses ;
- synchronisation automatique des depenses avec les journees ;
- migration compatible avec les donnees et sauvegardes v2.4.x.
- initialisation et suivi de la tresorerie theorique ;
- entrees, sorties et corrections exceptionnelles ;
- objectifs mensuels de CA, ventes et benefice ;
- plafond de depenses, progression et effort quotidien restant ;
- rapports et sauvegardes JSON etendus a la v2.6.0.
- gestion multi-vendeurs et ventes individuelles ;
- cycles de 26 jours avec rattrapage sur le mois suivant ;
- salaires historiques, primes cumulatives configurables et paiements relies a la tresorerie.

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

### v2.4.1

- Refonte du module Parametres.
- Configuration centralisee dans `settings`.
- Prix, couts et devise configurables.
- Export/import JSON et reinitialisations dans Parametres.

### v2.4.2

- Stabilisation du module Parametres.
- Validation renforcee des parametres et imports JSON.
- Normalisation des journees importees sans changer leur structure.
- Alignement des versions application, exports et cache PWA.

### v2.4.3

- Stabilisation UX du module Parametres.
- Theme sombre applique depuis les preferences d'apparence.
- Couleur de theme navigateur synchronisee avec les parametres.
- Protection des champs Parametres pendant la saisie.

### v2.5.0

- Gestion avancee des depenses.
- Migration des depenses historiques.
- Synchronisation des journees, statistiques, rapports et sauvegardes JSON.

### v2.6.0

- Tresorerie theorique parallele au champ historique `caisse`.
- Mouvements financiers exceptionnels et corrections.
- Objectifs mensuels et suivi de progression.

### v2.7.1

- Vendeurs, ventes individuelles et classement par performance quotidienne.
- Cycles de travail de 26 jours, y compris le rattrapage d’un mois sur l’autre.
- Historique de salaire, primes cumulatives configurables et rémunérations dues.
- Paiements de salaire idempotents et sorties de trésorerie associées.

### v2.7.2

- Alignement documentaire et de version entre l'application, les exports et le cache PWA.
- Recette de non-régression ciblée sur vendeurs, cycles, paiements, sauvegardes et suppressions.

### v2.8.0

- Sauvegardes JSON avec version de schéma, version applicative, date d’export et clés incluses.
- Validation centralisée des imports, avertissement des sections absentes et conservation des données non importées.
- Téléchargement d’une sauvegarde de secours avant import, réinitialisation ou suppression.
- Rapprochement indicatif entre caisse historique et trésorerie théorique, sans double comptage.

### v2.9.0

- Rapport mensuel de performance vendeurs : ventes, moyenne quotidienne, classement, CA et marge brute sur coûts directs.
- Rapport mensuel de paie vendeurs : cycles, primes cumulées, rémunérations dues, paiements et sorties de trésorerie liées.
- Exports Excel/PDF enrichis avec les données vendeurs et de paie.
- Verrouillage renforcé des cycles payés ; l’annulation explicite de la sortie de trésorerie liée est nécessaire avant un nouveau paiement.

### v2.10.0

- Brouillon local et raccourcis clavier pour la saisie quotidienne vendeur.
- Historique filtrable et paginé, sans lecture répétée de `localStorage` pendant la navigation.
- Source unique de version dans `app-version.js`, version active affichée et mise à jour PWA forcée.
- Focus visibles, navigation clavier et historique adapté aux écrans mobiles.

### v2.10.1 - Version actuelle

- Import compatible avec les sauvegardes v2.7.1 qui possèdent déjà `exportedAt` mais pas encore les métadonnées de schéma v2.8.0.
- Contrôle strict maintenu pour les sauvegardes modernes à métadonnées incomplètes.

### v3.0.0 - Prochaine version majeure

- Objectif a definir apres stabilisation de `v2.7.x`.
- Aucun nouveau module ne doit etre engage avant validation du module Parametres.

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

La saisie quotidienne est accessible dans Vendeurs et peut être ouverte avec `Alt + V`.

### Saisie quotidienne vendeur

La saisie permet de choisir un vendeur et d’enregistrer :

- le nombre de CV vendus ;
- le nombre de QN vendus ;
- la date travaillée.

Les calculs sont effectues automatiquement :

- CA ;
- total glaces ;
- benefice ;
- caisse.

La validation ajoute la journée à l’historique et aux données vendeurs. Un brouillon local est restauré après rechargement ; `Ctrl/⌘ + Entrée` enregistre la saisie.

### Historique

L'historique affiche les journées de la plus récente à la plus ancienne, avec recherche, filtre mensuel et pagination de 25, 50 ou 100 lignes.

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

### Tresorerie

La tresorerie commence a la date et au solde initial choisis par l'utilisateur. Son calcul theorique est :

```text
solde initial + CA enregistre - depenses detaillees + entrees manuelles - sorties manuelles
```

Les donnees anterieures a la date de depart ne sont pas reconstruites. Le champ historique `caisse` reste inchange et distinct de cette tresorerie.

### Objectifs

Un ensemble unique d'objectifs peut etre defini pour chaque mois : CA, ventes, benefice et plafond de depenses. Les jours restants incluent la journee courante. Les statuts utilisent les seuils suivants : objectif atteint a 100 %, en avance a au moins 10 points au-dessus du rythme calendaire, dans le rythme jusqu'a 5 points sous ce rythme, sinon a surveiller. Un plafond depasse est toujours signale comme tel.

### PWA

La version `v2.4.0` permet :

- l'installation de l'application depuis un navigateur compatible ;
- le chargement des fichiers principaux depuis le cache ;
- l'utilisation renforcee hors ligne ;
- l'affichage avec une icone et un theme dedies.

Depuis `v2.10.0`, la version est définie une seule fois dans `app-version.js`. Paramètres affiche la version active et propose « Forcer la mise à jour » pour vérifier le service worker et renouveler les caches de l’application.

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

Les depenses detaillees sont enregistrees sous la cle :

```text
nissa_expenses
```

Chaque depense contient un identifiant, une date, une categorie, un libelle, un montant numerique et une note. Les anciennes journees sont migrees une seule fois sans modifier leur structure historique.

Les mouvements manuels de tresorerie sont enregistres sous :

```text
nissa_treasury
```

Les objectifs mensuels sont enregistres sous :

```text
nissa_goals
```

Les données de la gestion vendeurs sont conservées séparément sous les clés `nissa_sellers`, `nissa_seller_sales` et `nissa_seller_cycles`. Les journées historiques existantes ne sont pas modifiées.

## Historique des versions

### v2.10.1 - 2026-10-27

- Correction de la détection des sauvegardes anciennes v2.7.1 pendant l’import JSON.

### v2.10.0 - 2026-10-27

- Saisie vendeur sécurisée par brouillon local et raccourcis clavier.
- Historique paginé avec recherche et filtre mensuel.
- Version PWA centralisée, contrôle de mise à jour et améliorations accessibilité/mobile.

### v2.9.0 - 2026-10-27

- Rapports mensuels de performance et de paie vendeurs dans l’interface, Excel et PDF.
- Verrouillage renforcé des paiements avec annulation explicite et traçable depuis la trésorerie.
- Rapprochement des cycles et paiements par `sellerId`, `cycleId` et `treasuryMovementId`.

### v2.7.2 - 2026-10-27

- Cohérence de version dans l'application, les exports et le cache PWA.
- Documentation de la recette de non-régression vendeurs et données.

### v2.8.0 - 2026-10-27

- Sauvegardes JSON versionnées, import contrôlé, conservation des sections absentes et secours horodaté.
- Rapprochement de contrôle entre caisse historique et trésorerie théorique.

### v2.7.1 - 2026-09-22

- Synchronisation des ventes vendeur avec l'historique, les dépenses et les paiements de salaires.
- Suppression d'une vente vendeur depuis l'historique.

### v2.7.0 - 2026-09-12

- Gestion des vendeurs, cycles de 26 jours et ventes individuelles.
- Prime cumulative configurable, salaire historisé et paiement relié à la trésorerie.

### v2.6.0 - 2026-08-15

- Tresorerie, initialisation, mouvements et corrections.
- Objectifs mensuels, progression et effort restant.
- Dashboard, rapports, imports, exports et cache PWA enrichis.

### v2.5.0 - 2026-08-14

- Gestion detaillee des depenses et categories.
- CRUD, filtres, statistiques et comparaison mensuelle.
- Synchronisation avec les journees, le tableau de bord et les rapports.
- Import/export JSON compatible v2.4.x et cache PWA v2.5.0.

### v2.4.3 - 2026-08-02

- Theme sombre rendu effectif.
- Couleur de theme navigateur mise a jour depuis les parametres.
- Formulaire Parametres protege pendant l'edition.

### v2.4.2 - 2026-08-01

- Stabilisation du module Parametres.
- Validation et nettoyage des parametres sauvegardes ou importes.
- Import JSON plus robuste.
- Cache PWA et exports alignes sur la version courante.

### v2.4.1 - 2026-08-01

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
