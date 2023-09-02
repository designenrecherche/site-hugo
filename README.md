# Site de design en recherche

- Repo du site: https://github.com/designenrecherche/site-hugo
- Générateur de site statique: Hugo v0.60.1
- CMS statique: [TinaCMS](https://tina.io)
- Déploiement: [Netlify](https://www.netlify.com/)

## Développement

Installer [hugo](https://gohugo.io/)

Initialisation en local :

```
cd path/to/files/site-hugo
npx @tinacms/cli@latest init
```

Démarrage du serveur local : 

```
cd path/to/files/site-hugo
npx tinacms dev -c "hugo server"
```