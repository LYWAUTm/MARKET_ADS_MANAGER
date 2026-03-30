# MARKET ADS MANAGER

                                     ## LIVRABLES :

- Liste des fonctionnalités
- Arborescence du projet
- wireframes simples
- liste des routes


                              ## ARCHITECTURE TECHNIQUE

### Backend :
- Node.js + Express
- MySQL ( local WAMP )
- Authentification JWT
- Upload d'images : Multer
- Sécurité : Helmet, bcrypt

### Frontend :

- HTML, CSS, JS
- Nunjucks ( équivalent EJS )

                              ## LISTES DES FONCTIONNALITES :

### un utilisateur doit pouvoir :

- créer un compte
- se connecter
- modifier leur profil
- supprimer leur compte

### un utilisateur connecté doit pouvoir :

- Publier une annonce
- Modifier une annonce
- Supprimer une annonce
- Consulter ses annonces
- contacter le vendeur d’une annonce

### Un visiteur peut aller sur :

- Liste des annonces
- Détail d’une annonce
- Donner une réponse par mail

### Le visiteur doit pouvoir chercher une annonce par :

- Recherche par mot-clé
- Filtre par catégorie
- Filtre par prix (min/max)
- Filtre par localisation


                           ## ARBORESCENCE / WIREFRAMES (pages)

 - voir dossier images " /public/images/ "

 LIENS : 
FIGMA = [text](https://www.figma.com/design/Axsfwi8eWDzdLisempRRQj/Market-Ads-Manager?node-id=0-1&t=p0WP2MOBMEm2hlye-1)

## STRUCTURE :

# MARKET_ADS_MANAGER

* [public/](.\MARKET_ADS_MANAGER\public)
  * [css/](.\MARKET_ADS_MANAGER\public\css)
  * [documents/](.\MARKET_ADS_MANAGER\public\documents)
  * [images/](.\MARKET_ADS_MANAGER\public\images)
  * [js/](.\MARKET_ADS_MANAGER\public\js)
* [server.js/](.\MARKET_ADS_MANAGER\server.js)
* [src/](.\MARKET_ADS_MANAGER\src)
  * [config/](.\MARKET_ADS_MANAGER\src\config)
  * [controllers/](.\MARKET_ADS_MANAGER\src\controllers)
  * [middlewares/](.\MARKET_ADS_MANAGER\src\middlewares)
  * [models/](.\MARKET_ADS_MANAGER\src\models)
  * [routes/](.\MARKET_ADS_MANAGER\src\routes)
* [views/](.\MARKET_ADS_MANAGER\views)
  * [ads/](.\MARKET_ADS_MANAGER\views\ads)
  * [categories/](.\MARKET_ADS_MANAGER\views\categories)
  * [layouts/](.\MARKET_ADS_MANAGER\views\layouts)
  * [partials/](.\MARKET_ADS_MANAGER\views\partials)
  * [users/](.\MARKET_ADS_MANAGER\views\users)
* [.env](.\MARKET_ADS_MANAGER\.env)
* [.gitignore](.\MARKET_ADS_MANAGER\.gitignore)
* [README.md](.\MARKET_ADS_MANAGER\README.md)
