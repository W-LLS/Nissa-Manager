# TODO NISSA Manager

## Version actuelle

- [x] `v2.10.1` - Compatibilité d’import des sauvegardes v2.7.1.

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

## v2.7.0 - Gestion des vendeurs et des cycles de salaire

- [x] Ajouter les vendeurs actifs ou inactifs et leur historique de salaire.
- [x] Enregistrer les ventes individuelles avec leurs couts directs.
- [x] Gerer les cycles de 26 journees travaillees et les absences.
- [x] Ajouter des primes cumulatives configurables.
- [x] Calculer les remunerations dues et les relier a la tresorerie.
- [x] Etendre l'export et l'import JSON aux donnees vendeurs.

## v2.7.1 - Stabilisation de la gestion vendeurs

- [x] Synchroniser les ventes vendeur avec l'historique, les depenses et les paiements de salaires.
- [x] Permettre la suppression d'une vente vendeur depuis l'historique.
- [x] Verifier le cycle de 26 journees, le paiement unique et l'import/export JSON.
- [ ] Executer l'essai manuel de suppression protegee d'une vente liee a un cycle paye.

## v2.7.2 - Cohérence documentaire et version

- [x] Aligner README, CHANGELOG, interface, rapports, exports JSON et cache PWA sur `v2.7.2`.
- [x] Documenter le module interne `Sellers` et actualiser la roadmap v2.7.1/v2.7.2.
- [x] Remplacer la référence de stabilisation v3.0.0 par `v2.7.x`.
- [x] Compléter la recette manuelle ciblée sur ventes, cycles, paiements, JSON et suppressions.

## v2.8.0 - Fiabilisation des données

- [x] Ajouter les métadonnées de schéma et d’application aux exports JSON.
- [x] Valider les métadonnées et sections avant import ; préserver les sections non incluses.
- [x] Demander confirmation et télécharger un secours horodaté avant import et suppressions/réinitialisations.
- [x] Documenter les identifiants et liens vendeurs, ventes, cycles, paiements et trésorerie.
- [x] Ajouter la vue de rapprochement caisse historique / trésorerie théorique.
- [x] Aligner l’application, les exports, les rapports et le cache PWA sur `v2.8.0`.

## v2.9.0 - Exploitation vendeurs et rapports

- [x] Ajouter le rapport mensuel de performance vendeurs : ventes, moyenne quotidienne, classement et marge brute.
- [x] Ajouter le rapport mensuel de paie : cycles, primes, rémunérations dues, paiements et sorties de trésorerie.
- [x] Verrouiller les cycles payés et exiger une annulation explicite de la sortie liée avant tout nouveau paiement.
- [x] Étendre les mois et exports de rapports aux données de trésorerie et vendeurs.
- [x] Conserver toutes les clés nécessaires dans les sauvegardes JSON.
- [x] Aligner l’application, les rapports, les exports et le cache PWA sur `v2.9.0`.

## v2.10.0 - Améliorations UX et performance

- [x] Lot 3 validé avant développement.
- [x] Ajouter les raccourcis clavier et le brouillon local à la saisie quotidienne vendeur.
- [x] Conserver les confirmations et sauvegardes avant les suppressions.
- [x] Ajouter recherche, filtre mensuel et pagination 25/50/100 à l’historique.
- [x] Éviter les relectures de `localStorage` pendant la pagination et limiter les lignes rendues.
- [x] Centraliser la version PWA et afficher la version active.
- [x] Ajouter un bouton de mise à jour forcée.
- [x] Renforcer labels, focus, navigation clavier et rendu mobile de l’historique.

## v2.10.1 - Compatibilité des sauvegardes anciennes

- [x] Reconnaître `version` et `exportedAt` seuls comme métadonnées historiques v2.7.1.
- [x] Ne déclencher le contrôle moderne que si `schemaVersion`, `appVersion` ou `includedKeys` est présent.
- [x] Continuer à refuser les métadonnées modernes partielles.

## v3.0.0 - Prochaine version majeure

- [ ] Definir le perimetre apres stabilisation de `v2.7.x`.
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

- [x] Ajouter des tests manuels documentes dans `docs/TESTS_MANUELS.md`.
- [ ] Ajouter une validation plus stricte des donnees chargees depuis `localStorage`.
- [x] Prévoir une version de schéma (`1.0.0`) pour les imports/exports JSON.
- [ ] Verifier l'accessibilite clavier des onglets.
- [ ] Verifier le rendu mobile a chaque version.
