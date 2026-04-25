# MODULE 05 — Authentification utilisateur

Plateforme : **MARKET_ADS_MANAGER**

Objectif : Permettre aux utilisateurs de :

- **s’inscrire**

- **se connecter**

- **accéder aux routes protégées** via un système sécurisé basé sur **bcrypt** et **JWT**.

## Objectifs pédagogiques

- Implémenter un système d’authentification sécurisé.
- Gérer l’inscription (REGISTER) et la connexion (LOGIN).
- Protéger les routes sensibles via un middleware JWT.
- Centraliser la gestion des erreurs via un middleware global.
- Tester l’ensemble avec Postman.

---

## Technologies utilisées

### Dépendances

- **bcrypt** — Hash sécurisé des mots de passe  
- **jsonwebtoken** — Génération et vérification des tokens JWT  
- **express** — Framework backend  
- **mysql2** — Base de données utilisateurs  
- **helmet** — Sécurisation des headers HTTP  
- **cors** — Autorisation des requêtes cross-origin  
- **dotenv** — Variables d’environnement  

### Dev

- **nodemon** — Reload automatique en développement

## Architecture liée à l’authentification

backend/
│
├── controllers/
│   └── auth_controller.js
│
├── middlewares/
│   ├── auth_middleware.js
│   └── error_middleware.js
│
├── routes/
│   └── auth_routes.js
│
├── config/
│   └── db_mysql.js
│
├── app.js
└── server.js

## Fonctionnalités implémentées

### 1. REGISTER

#### Rôle

- Vérifier si l’email existe déjà  
- Hash le mot de passe avec **bcrypt**  
- Insère l’utilisateur dans MySQL  
- Retourne un message + l’ID créé

### 2. LOGIN

#### Rôle

- Vérifier existence utilisateur
- Comparé mot de passe hashé
- Générer un token
- Retourner infos utilisateur + token

### 3. AUTH_MIDDLEWARE

#### Rôle

- Vérifier présence header Authorization: Bearer TOKEN
- Vérifier validité du TOKEN
- Extrait ID utilisateur
- Blocage accès si TOKEN manquant ou invalise

### 4. ERROR_MIDDLEWARE

#### Rôle

- Centraliser toutes les erreurs
- Formater les réponses JSON
- Stack afficher seulement en NODE_ENV=development