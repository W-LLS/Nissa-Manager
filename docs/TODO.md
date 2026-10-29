# TODO NISSA Manager

## Version actuelle

- [x] `v2.15.4` - Secours autonome des calculs sur mobile.

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

## v2.11.0 - Fonctions métier optionnelles

- [x] Lot 5 validé explicitement avant développement.
- [x] Ajouter les dépenses récurrentes mensuelles avec génération explicite et anti-doublon.
- [x] Ajouter un budget mensuel par catégorie avec consommé, restant et dépassement.
- [x] Ajouter le seuil de rentabilité à partir des ventes, coûts directs, charges et paie disponibles.
- [x] Ajouter un simulateur de primes sans écriture dans les cycles ni la trésorerie.
- [x] Extraire progressivement les fonctions pures testables dans `js/business-calculations.js`.
- [x] Étendre les sauvegardes JSON aux nouvelles clés sans modifier `nissa_data`.
- [x] Aligner l'application, la documentation et le cache PWA sur `v2.11.0`.

## v2.12.0 - Production par lot

- [x] Ajouter un catalogue de matières avec unité et coût unitaire.
- [x] Ajouter une recette théorique par produit avec rendement et autres coûts directs.
- [x] Enregistrer les productions par lot avec quantité réellement obtenue.
- [x] Calculer le coût total, le coût unitaire et le coût moyen pondéré du stock.
- [x] Contrôler le stock disponible avant les nouvelles ventes vendeur.
- [x] Figer le coût appliqué sur chaque nouvelle vente sans recalculer les anciennes.
- [x] Restaurer le stock valorisé lors de la suppression autorisée d'une vente.
- [x] Étendre les sauvegardes JSON aux quatre nouvelles clés de production.
- [x] Conserver `nissa_data` et les anciens paramètres matières sans migration destructive.

## v2.13.0 - Achats et stock matières

- [x] Ajouter l'enregistrement des achats de matières avec quantité et coût réel.
- [x] Valoriser le stock matière au coût moyen pondéré.
- [x] Contrôler et consommer le stock matière lors de la production d'un lot.
- [x] Compter l'achat comme sortie réelle de trésorerie.
- [x] Exclure l'achat de stock des charges déjà constatées au moment de la vente.
- [x] Exclure le coût automatique de vente des sorties de trésorerie.
- [x] Verrouiller les écritures liées dans l'historique des dépenses.
- [x] Étendre les sauvegardes JSON aux achats et stocks matières.

## v2.13.1 - Stabilisation

- [x] Interdire la modification directe des journées issues des ventes vendeur.
- [x] Ajouter le verrou correspondant dans `Store.update`.
- [x] Valider l'unicité et la présence des identifiants des sauvegardes modernes.
- [x] Contrôler les relations vendeurs, cycles, ventes, matières, recettes, lots, stocks et écritures liées avant import.
- [x] Figer le nom et l'unité dans chaque achat de matière.
- [x] Protéger l'unité d'une matière déjà utilisée.
- [x] Aligner application, documentation et cache PWA sur `v2.13.1`.

## v2.14.0 - Interface mobile

- [x] Remplacer la longue navigation mobile par un sélecteur direct de section.
- [x] Synchroniser le sélecteur, les boutons de bureau, le titre et la vue active.
- [x] Revenir en haut de page après un changement de section sur petit écran.
- [x] Éviter le zoom automatique des champs de saisie sur mobile.
- [x] Adapter panneaux, indicateurs, formulaires, actions et graphiques aux écrans étroits.
- [x] Conserver les tableaux lisibles par défilement horizontal et l’historique sous forme de cartes.
- [x] Respecter la préférence de réduction des animations.
- [x] Aligner application, documentation et cache PWA sur `v2.14.0`.

## v2.15.0 - Diagnostic d’intégrité

- [x] Ajouter un diagnostic accessible depuis Paramètres sans modification automatique.
- [x] Contrôler les identifiants absents ou dupliqués.
- [x] Contrôler les relations vendeurs, ventes, cycles, absences et paiements.
- [x] Détecter les doubles paiements et les journées vendeurs incohérentes.
- [x] Contrôler les dépenses liées aux ventes, achats de matières et lots.
- [x] Contrôler les recettes, stocks produits et stocks matières.
- [x] Détecter les doublons d’échéances récurrentes et de budgets.
- [x] Vérifier la structure des clés locales et la sauvegarde complète.
- [x] Afficher le volume de stockage utilisé et avertir à l’approche de 4 Mo.
- [x] Extraire le moteur de diagnostic sous forme de fonction pure testable.
- [x] Aligner application, documentation et cache PWA sur `v2.15.0`.

## v2.15.1 - Identité visuelle

- [x] Remplacer le logo de la navigation de bureau.
- [x] Remplacer le logo de l’en-tête mobile.
- [x] Générer les icônes PNG 192 × 192 et 512 × 512 depuis l’image fournie.
- [x] Aligner favicon, icône Apple et manifeste PWA.
- [x] Renouveler la version du cache PWA.

## v2.15.2 - Export PDF mobile

- [x] Supprimer l’ouverture du rapport dans une nouvelle fenêtre.
- [x] Imprimer le rapport depuis un conteneur dédié dans la page active.
- [x] Masquer l’interface applicative pendant l’impression.
- [x] Ajouter une mise en page A4 compacte pour les tableaux volumineux.
- [x] Afficher les instructions « Enregistrer en PDF » ou « Partager » sur mobile.
- [x] Nettoyer le rapport temporaire après la fermeture du dialogue d’impression.

## v2.15.3 - Import JSON mobile

- [x] Retirer la dépendance à `Object.hasOwn` du validateur et du restaurateur.
- [x] Utiliser `Object.prototype.hasOwnProperty.call` pour les anciennes versions de Safari/Chrome mobile.
- [x] Conserver le message d’échec d’import à l’écran.
- [x] Maintenir la détection des sauvegardes anciennes v2.7.1.

## v2.15.4 - Secours autonome des calculs

- [x] Détecter une API `NissaCalculations` absente ou incomplète.
- [x] Intégrer une copie de secours dans `index.html`.
- [x] Conserver le module externe comme source prioritaire.
- [x] Tester le démarrage du secours sans le fichier externe.
- [x] Tester le chargement combiné sans double initialisation.

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
