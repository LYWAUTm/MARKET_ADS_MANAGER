# MARKET ADS MANAGER

## LIVRABLES

- Liste des fonctionnalités
- Arborescence du projet
- wireframes simples
- liste des routes

## ARCHITECTURE TECHNIQUE

### Backend

- Node.js + Express
- MySQL ( local WAMP )
- Authentification JWT
- Upload d'images : Multer
- Sécurité : Helmet, bcrypt

### Frontend

- HTML, CSS, JS
- Nunjucks ( équivalent EJS )

## LISTES DES FONCTIONNALITES & ROUTES

### Le visiteur (public) doit pouvoir

Route accessible sans connexion

- Liste des annonces --------------------------------- GET /ads/
- Détail d’une annonce ------------------------------- GET /ads/:id
- Contacter vendeur ---------------------------------- POST /ads/:id/contact

- Recherche par mot-clé ------------------------------ GET /ads?search=mot
- Filtre par catégorie ------------------------------- GET /ads?category=cat
- Filtre par prix (min/max) -------------------------- GET /ads?min=0&max=100
- Filtre par localisation ---------------------------- GET /ads?location=ville

### un utilisateur connecté doit pouvoir

Route accessible après inscription et connexion

- créer un compte ------------------------------------ POST /auth/register
- se connecter --------------------------------------- POST /auth/login

- Consulter son profil ------------------------------- GET /user/profile
- modifier leur profil ------------------------------- PUT /user/profile
- supprimer leur compte ------------------------------ DELETE /user/profile

- Consulter ses annonces ----------------------------- GET /user/ads
- Publier une annonce -------------------------------- POST /user/ads
- Modifier une annonce ------------------------------- PUT /user/ads/:id
- Supprimer une annonce ------------------------------ DELETE /user/ads/:id
- contacter le vendeur d’une annonce ----------------- POST /ads/:id/contact

## ARBORESCENCE / WIREFRAMES (pages)

- voir dossier images " /public/images/ "

LIENS :
FIGMA = [text](https://www.figma.com/design/Axsfwi8eWDzdLisempRRQj/Market-Ads-Manager?node-id=0-1&t=p0WP2MOBMEm2hlye-1)

## STRUCTURE

MARKET_ADS_MANAGER/
┣ public/
┃ ┣ css/
┃ ┣ documents/
┃ ┣ images/
┃ ┃ ┣ arborescence.png
┃ ┃ ┣ indexe.png
┃ ┃ ┗ wireframes_page.png
┃ ┗ js/
┣ src/
┃ ┣ config/
┃ ┃ ┗ db.js
┃ ┣ controllers/
┃ ┃ ┣ adsController.js
┃ ┃ ┣ authController.js
┃ ┃ ┗ userController.js
┃ ┣ middlewares/
┃ ┃ ┣ adsMiddleware.js
┃ ┃ ┣ authmiddleware.js
┃ ┃ ┗ userMiddleware.js
┃ ┣ models/
┃ ┃ ┣ adsModel.js
┃ ┃ ┣ authModel.js
┃ ┃ ┗ userModel.js
┃ ┣ routes/
┃ ┃ ┣ adsRoute.js
┃ ┃ ┣ authRoute.js
┃ ┃ ┗ userRoute.js
┃ ┗ server.js
┣ views/
┃ ┣ ads/
┃ ┃ ┣ adsDashboard.njk
┃ ┃ ┣ detailAds.njk
┃ ┃ ┣ editAds.njk
┃ ┃ ┗ listAds.njk
┃ ┣ contacts/
┃ ┃ ┣ contactAds.njk
┃ ┃ ┗ contactUser.njk
┃ ┣ layouts/
┃ ┃ ┗ base.njk
┃ ┣ partials/
┃ ┃ ┣ footer.njk
┃ ┃ ┗ header.njk
┃ ┗ users/
┃   ┣ editProfil.njk
┃   ┣ login.njk
┃   ┣ register.njk
┃   ┗ userDashboard.njk
┣ .env
┣ .gitignore
┗ README.md
