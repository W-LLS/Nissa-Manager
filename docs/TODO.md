# TODO NISSA Manager

## Version actuelle

- [x] `v2.6.0` - Tresorerie et objectifs mensuels.

## Regles permanentes de versionnement

- [ ] Incremente automatiquement la version a chaque developpement.
- [ ] Mettre a jour `CHANGELOG.md` a chaque developpement.
- [ ] Mettre a jour `docs/TODO.md` a chaque developpement.
- [ ] Afficher la version dans l'application.
- [ ] Utiliser la version dans tous les rapports de fin.
- [ ] Respecter le versionnement semantique `MAJEURE.MINEURE.CORRECTIF`.

## v2.2.0 - Previsions avancees et intelligence metier

- [x] Creer un module de previsions avancees.
- [x] Ajouter une analyse des tendances.
- [x] Estimer les ventes futures a partir de l'historique.
- [x] Identifier les meilleurs jours et periodes.
- [x] Ajouter des indicateurs d'aide a la decision.

## v2.3.0 - Exports PDF, Excel et rapport mensuel

- [x] Ajouter l'export PDF.
- [x] Ajouter l'export Excel.
- [x] Generer un rapport mensuel.
- [x] Preparer les donnees pour impression ou partage.
- [x] Verifier la compatibilite des exports avec les donnees existantes.

## v2.4.0 - Premiere version PWA installable

- [x] Ajouter un manifeste PWA.
- [x] Ajouter un service worker.
- [x] Rendre l'application installable.
- [x] Verifier le fonctionnement hors ligne installe.
- [x] Preparer les icones et assets PWA.

## v2.4.1 - Refonte du module Parametres

- [x] Centraliser la configuration dans un objet `settings`.
- [x] Stocker les parametres sous une seule cle `nissa_settings`.
- [x] Creer les sections Entreprise, Produits, Matieres premieres, Previsions, Sauvegarde, Apparence et Donnees.
- [x] Supprimer les prix produits codes en dur dans les calculs.
- [x] Faire lire la devise et les prix depuis les parametres.
- [x] Regrouper export JSON, import JSON et reinitialisations dans Parametres.
- [x] Conserver la compatibilite de la structure des journees.

## v2.4.2 - Stabilisation du module Parametres

- [x] Renforcer la validation des parametres sauvegardes.
- [x] Nettoyer les valeurs invalides chargees depuis `localStorage`.
- [x] Normaliser les journees importees sans modifier leur structure.
- [x] Refuser les imports JSON sans parametres ni historique valides.
- [x] Proteger l'application contre la desactivation simultanee de CV et QN.
- [x] Aligner la version des exports et du cache PWA.

## v2.4.3 - Stabilisation UX du module Parametres

- [x] Appliquer réellement le theme sombre.
- [x] Synchroniser la couleur de theme navigateur avec les parametres.
- [x] Eviter l'ecrasement des champs Parametres pendant la saisie.
- [x] Aligner la version application, exports et cache PWA.

## v2.5.0 - Gestion avancee des depenses

- [x] Ajouter la cle `nissa_expenses` et les categories par defaut.
- [x] Ajouter la vue Depenses, le CRUD, les filtres et l'historique.
- [x] Synchroniser les depenses detaillees avec les journees existantes.
- [x] Migrer une seule fois les depenses historiques.
- [x] Ajouter les statistiques par categorie et la comparaison mensuelle.
- [x] Ajouter les depenses au tableau de bord et aux rapports.
- [x] Etendre les exports et imports JSON aux depenses.
- [x] Aligner la version de l'application et du cache PWA.

## v2.6.0 - Tresorerie et objectifs mensuels

- [x] Ajouter `nissa_treasury`, son initialisation et le CRUD des mouvements.
- [x] Integrer automatiquement CA et depenses sans double saisie.
- [x] Ajouter les corrections et l'evolution de tresorerie.
- [x] Ajouter `nissa_goals` avec un ensemble unique par mois.
- [x] Calculer progressions, statuts, jours et effort restants.
- [x] Enrichir le dashboard et les rapports mensuels.
- [x] Etendre les imports et exports JSON aux donnees v2.6.0.
- [x] Aligner l'application et le cache PWA sur `v2.6.0`.

## v3.0.0 - Prochaine version majeure

- [ ] Definir le perimetre apres stabilisation de `v2.6.0`.
- [ ] Ne pas demarrer de nouveau module avant validation complete du module Parametres.

## Refactorisation future

- [ ] Extraire le CSS integre vers `css/styles.css`.
- [ ] Extraire les helpers vers `js/utils.js`.
- [ ] Extraire la couche de stockage vers `js/store.js`.
- [ ] Extraire la navigation vers `js/app.js`.
- [ ] Extraire le tableau de bord vers `js/dashboard.js`.
- [ ] Extraire le module Journee vers `js/journee.js`.
- [ ] Extraire l'historique vers `js/historique.js`.
- [ ] Remplacer l'appel global `renderAll()` par un mecanisme plus explicite.

## Qualite

- [ ] Ajouter des tests manuels documentes.
- [ ] Ajouter une validation plus stricte des donnees chargees depuis `localStorage`.
- [ ] Prevoir une version de schema pour les futures migrations de donnees.
- [ ] Verifier l'accessibilite clavier des onglets.
- [ ] Verifier le rendu mobile a chaque version.
