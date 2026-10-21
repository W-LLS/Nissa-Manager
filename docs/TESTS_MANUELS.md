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

- [ ] Ajouter un vendeur actif avec une date d'entree et un salaire de base.
- [ ] Enregistrer une vente vendeur ; verifier sa presence dans l'historique et la depense automatique de couts produits.
- [ ] Verifier que le CA, le benefice, la marge brute et le classement vendeur sont recalcules.
- [ ] Enregistrer une absence ; verifier qu'elle est tracee sans augmenter le nombre de jours travailles.
- [ ] Enregistrer 26 dates de vente distinctes pour un vendeur ; verifier le statut « A payer », le salaire historique et la prime cumulative.
- [ ] Initialiser la tresorerie, payer le cycle et verifier une unique sortie « Salaires » associee.
- [ ] Tenter un second paiement du meme cycle ; verifier son refus.
- [ ] Tenter de supprimer une vente liee a un cycle paye ; verifier son refus.
- [ ] Supprimer une vente d'un cycle non paye ; verifier la suppression synchronisee dans l'historique et les depenses.

## Sauvegarde, import et PWA

- [ ] Exporter les donnees JSON ; verifier la presence des vendeurs, ventes, cycles, absences, depenses, tresorerie et objectifs.
- [ ] Importer cette sauvegarde dans une base vide ; verifier les memes indicateurs et paiements.
- [ ] Fermer puis rouvrir l'application hors ligne apres un premier chargement en ligne.
- [ ] Verifier que la version de cache se renouvelle apres une mise a jour.

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
