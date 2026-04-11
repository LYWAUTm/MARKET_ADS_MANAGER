# MARKET ADS MANAGER

## LIVRABLES

- Liste des fonctionnalités
- Arborescence du projet
- wireframes simples
- liste des routes

## STACKs

### Frontend

- HTML, CSS
- Bootstrap / Tailwind
- React Vite (à confirmer)

### Backend

- Node.js + Express
- Javascript
- Authentification JWT
- Sécurité : Helmet, Bcrypt / Argon2
- Upload d'images : Multer

### initialisation ( command terminal )

- cd backend
- npm init -y
- npm install express nunjucks
- version ESM : mettre "type": "module" dans le package.json
- initialisation app.js, server.js, .env, .env.example, .gitignore

### BDD

- MySQL
- MongoDB
- SQLite (BDD embarquée)

## PAGES / FONCTIONNALITES / ROUTE

### Visiteur (public)

- Accueil   /  Liste des annonces ----- GET /ads/
- DetailAd  /  Détail d’une annonce ------------- GET /ads/:id
- DetailAd  /  Contacter vendeur ---------------- POST /ads/:id/contact

- Accueil   /  Recherche par mot-clé ------------- GET /ads?search=mot
- Accueil   /  Recherche par catégorie ----------- GET /ads?category=cat
- Accueil   /  Recherche par prix (min/max) ------ GET /ads?min=0&max=100
- Accueil   /  Recherche par localisation -------- GET /ads?location=ville

### Utilisateur connecté

#### Authentification

- Signup   /  Créer un compte ------------------- POST /auth/register
- Login    /  Se connecter ---------------------- POST /auth/login
- Newpass  /  Mot de passe oublier -------------- GET  /auth/forgot_pass
- Verifmail  /  Vérifier si le mail est valide -- GET  /auth/verify_mail


#### Profil utilisateur

- Profil   /  Consulter son profil -------------- GET /user/profile
- Profil   /  modifier leur profil -------------- PUT /user/profile
- Profil   /  supprimer leur compte ------------- DELETE /user/profile

#### Gestion des annonces

- Dashboard  /  Consulter ses annonces ------------ GET /user/ads
- Dashboard  /  Publier une annonce --------------- POST /user/ads
- Dashboard  /  Modifier une annonce -------------- PUT /user/ads/:id
- Dashboard  /  Supprimer une annonce ------------- DELETE /user/ads/:id
- Dashboard  /  contacter le vendeur d’une annonce  POST /ads/:id/contact

## STRUCTURE

MARKET_ADS_MANAGER/
┣ backend/
┃ ┣ node_modules/
┃ ┣ src/
┃ ┣ .env
┃ ┣ .env.example
┃ ┣ app.js
┃ ┣ package-lock.json
┃ ┗ package.json
┣ frontend/
┃ ┣ api/
┃ ┣ components/
┃ ┗ public/
┣ .gitignore
┗ README.md

### Liens

- /frontend/public/images/
- /frontend/public/documentations/

- FIGMA = [text](https://www.figma.com/design/Axsfwi8eWDzdLisempRRQj/   Market-Ads-Manager?node-id=0-1&t=p0WP2MOBMEm2hlye-1)
