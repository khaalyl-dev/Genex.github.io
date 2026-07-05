# GX GENEX — Site vitrine

Site web vitrine de **GX GENEX** basé sur le template [multiplepage-portfolio](https://github.com/tomcomtang/multiplepage-portfolio), construit avec Next.js et déployable sur GitHub Pages.

## Pages

- **Accueil** — Présentation de la société
- **Projets** — Portfolio des réalisations (Elite Communications, PACTE, Adminix, etc.)
- **À propos** — Expertise et fiche signalétique
- **Contact** — Coordonnées et formulaire

## Développement local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Build & déploiement GitHub Pages

```bash
npm run build
```

Le site statique est généré dans le dossier `out/`.

### Étapes de publication

1. Créez un dépôt GitHub (ex. `genex-website`)
2. Poussez le code :

```bash
git add .
git commit -m "Site vitrine GX GENEX"
git remote add origin https://github.com/VOTRE_USERNAME/genex-website.git
git push -u origin main
```

3. Dans **Settings → Pages**, sélectionnez **GitHub Actions** comme source, ou déployez le dossier `out/` via la branche `gh-pages`

4. Si le dépôt n'est pas `username.github.io`, ajoutez le `basePath` dans `next.config.js` :

```js
basePath: '/genex-website',
assetPrefix: '/genex-website/',
```

## Contact

- **Email :** Genex.pro.tn@gmail.com
- **Téléphone :** 56 102 454
- **Adresse :** El Yasminette, Ben Arous, Tunisie
