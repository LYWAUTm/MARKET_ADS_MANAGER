# MARKET_ADS_MANAGER

Projet pédagogique – Plateforme de petites annonces

**Type** : application inspirée du fonctionnement de Leboncoin
**Objectif pédagogique** : Le projet est structuré en 12 modules indépendants permettant le travail d'une compétence spécifique. Chaque module peut être réalisé séparément, puis intégré dans un projet final global.
**Durée indicative par module** : 1 à 2 jours

## Technologies possibles

### Backend

- Node.js + Express
- Node.js + ESM
- PHP

### Frontend

- React
- Vue
- Next.js
- EJS
- Twig

### Base de données

- SQL (MySQL / PostgreSQL)
- MongoDB

### UI

- Bootstrap
- Tailwind CSS
- CSS natif

### Dépendances

dependencies

- cors
- dotenv
- express
- helmet
- mongoose
- mysql2
-bcrypt

devDependencies

- nodemon

## MODULE 4 – CRUD des annonces

Implémenter les opérations Create, Read, Update, Delete pour les annonces, afin de rendre l’API capable de gérer les données principales du projet.

Créer les routes : POST /annonces, GET /annonces, GET
/annonces/:id, PUT /annonces/:id, DELETE /annonces/:id.
Livrables : API CRUD fonctionnelle testée via Postman ou Insomnia.
Astuces : Tester chaque route avec des données simples avant d’ajouter la base complète.
Ressources : https://restfulapi.net

### Routes des annonces

 Base de données Mysql
POST("/ads") Créer une nouvelle annonce
GET ("/ads) Récupérer toutes les annonces
GET ("/ads/:id") Récupérer une annonce par son ID
PUT ("/ads/:id") Modifier une annonce existante
DELETE ("/ads/:id") Supprimer une annonce

### Routes des messages

Base de données mongoDB
POST("/messages") Créer un nouveau message
GET ("/messages") Récupérer tous les messages
GET ("/messages/post/id-post) Récupérer les messages lié a une annonce
GET ("/messages/sent/:id_expeditor") Récupérer les messages envoyés par un utilisateur
GET ("/messages/received/id_sender) Récupérer les messages reçu par un utilisateur

## START

- ouvrir son terminal "CTRL ù"
- aller dans son backend "CD backend"
- lancer son serveur "npm run dev"