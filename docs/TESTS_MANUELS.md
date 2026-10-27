# Recette manuelle — NISSA Manager

## Objectif

Cette recette protege les calculs, les donnees locales et les synchronisations entre les modules. Elle doit etre executee sur une origine locale distincte ou avec une sauvegarde JSON recente, afin de ne pas modifier les donnees d'exploitation.

## Avant chaque recette

1. Ouvrir l'application avec une base de test vide ou restauree depuis une sauvegarde de test.
2. Verifier que la version affichee dans l'en-tete, le titre de page et le cache PWA est identique.
3. Conserver une exportation JSON avant les essais d'import ou de reinitialisation.

## Navigation et affichage

- [ ] Ouvrir chaque onglet : Tableau de bord, Vendeurs, Historique, Depenses, Tresorerie, Objectifs, Statistiques, Previsions, Rapports et Parametres.
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

## Fiabilisation des données — v2.8.0 maintenue en v2.10.1

À exécuter sur une origine de test distincte et des données fictives uniquement.

- [ ] Exporter un JSON et vérifier `schemaVersion` (`1.0.0`), `appVersion` (`v2.10.1`), `exportedAt` ISO et `includedKeys` avec les clés locales attendues.
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
- [ ] Tester les flèches, Début et Fin sur les dix onglets avec plusieurs navigateurs.
- [ ] Vérifier visuellement l’historique en cartes à 320 px, 375 px et 720 px de largeur.
- [ ] Tester « Forcer la mise à jour » avec une vraie version suivante disponible, en ligne puis hors ligne.

## Compatibilité d’import — v2.10.1

- [x] Contrôle automatisé de la classification : `{ version, exportedAt }` est reconnu comme ancien format, tandis que `{ appVersion }` seul reste refusé.
- [ ] Importer une sauvegarde réelle v2.7.1 contenant `version` et `exportedAt`, sans `schemaVersion`, `appVersion` ni `includedKeys` : l’application doit afficher l’avertissement de compatibilité au lieu de « Métadonnées incomplètes ».
- [ ] Confirmer l’import après téléchargement du secours, puis comparer les sections présentes avant/après.
- [ ] Importer un fichier moderne contenant seulement `appVersion` ou seulement `includedKeys` : il doit toujours être refusé comme métadonnées incomplètes.

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

## Contrôle statique de version — v2.10.1

- [x] `app-version.js` contient l’unique valeur exécutable `v2.10.1`.
- [x] L’en-tête, le titre, les rapports, les exports JSON et le cache PWA lisent cette même valeur.
- [x] README, CHANGELOG, TODO et architecture identifient `v2.10.1` comme version actuelle.
