# Mettre l'app en ligne pour toi et ta conjointe

Il faut environ 10 minutes. Tout est gratuit.

## 1. Créer la base Supabase

1. Crée un compte sur https://supabase.com, puis clique sur **New project**. Nom : `repas`. Région : Paris (eu-west-3). Note le mot de passe de la base quelque part, il ne servira pas ensuite.
2. Ouvre le fichier `supabase.sql` et remplace `TON_EMAIL@exemple.fr` et `EMAIL_CONJOINTE@exemple.fr` par vos deux vraies adresses. Chacune apparaît 2 fois.
3. Dans Supabase, va dans **SQL Editor**, puis **New query**. Colle tout le fichier et clique sur **Run**.
   Ça crée la table, réserve l'accès à vos deux e-mails, active la synchro en direct et ajoute tes listes (48 aliments et 32 plats).
4. Optionnel mais plus simple : va dans **Authentication > Sign In / Providers > Email** et désactive **Confirm email**. Sinon, chacun devra cliquer sur un lien reçu par e-mail en créant son compte.
5. Va dans **Project Settings > API** (ou **Data API**) et envoie-moi :
   - la **Project URL** (`https://xxxx.supabase.co`) ;
   - la clé **anon public** (ou **publishable**).

   Cette clé est faite pour être publique : sans un des deux e-mails, elle ne donne accès à rien. N'envoie **jamais** la clé `service_role` (ou `secret`).

## 2. Héberger la page (GitHub Pages)

1. Sur GitHub, crée un dépôt **public** et vide, nommé par exemple `app-repas`.
2. Dis-moi son nom. J'y mets les fichiers et j'active GitHub Pages. L'adresse sera `https://williampollet.github.io/app-repas/`.

## 3. Sur vos téléphones

1. Ouvrez l'adresse, touchez **Créer mon compte** avec l'e-mail prévu et un mot de passe, puis connectez-vous.
2. Ajoutez l'app à l'écran d'accueil :
   - sur iPhone : Safari, bouton Partager, **Sur l'écran d'accueil** ;
   - sur Android : Chrome, menu ⋮, **Ajouter à l'écran d'accueil**.

## Bon à savoir

- Si vous modifiez **exactement en même temps** sur vos deux téléphones, la dernière modification enregistrée gagne. Pour un usage à deux, ça ne pose pas de problème en pratique.
- Hors ligne, l'app garde tes changements sur le téléphone et les envoie au retour du réseau.
- Le bouton **⋯** en haut à droite sert à exporter ou importer toutes les données, comme sauvegarde.
