# MARKET_ADS_MANAGER

Projet pédagogique – Plateforme de petites annonces inspirée du fonctionnement de Leboncoin.  
Le projet est structuré en **12 modules indépendants**, chacun permettant de travailler une compétence spécifique.  
Chaque module peut être réalisé séparément puis intégré dans un projet final global.

---

# MODULE 02 – Conception de la base de données

## Objectif du module
Concevoir la base de données du projet **Market Ads Manager**, en s’appuyant sur les besoins définis dans le module 01.

## Résumé des besoins
Le site doit permettre :

- la gestion des utilisateurs  
- la publication et la consultation d’annonces  
- la classification des annonces par catégories  
- l’envoi de messages entre utilisateurs  

## Entités identifiées
- UTILISATEURS  
- ANNONCES  
- MESSAGES  
- CATEGORIES  
- (FAVORIS)  
- (IMAGES)  

## Relations principales
- Un utilisateur publie plusieurs annonces  
- Une annonce appartient à un seul utilisateur  
- Une annonce appartient à 0 ou 1 catégorie  
- Une catégorie contient plusieurs annonces  
- Un utilisateur envoie et reçoit plusieurs messages  
- Un message concerne une seule annonce  

## 🛠Méthodologie
1. **MCD** – Modèle Conceptuel  
2. **MLD** – Modèle Logique  
3. **MPD** – Modèle Physique  
4. **Script SQL** – Création de la base  

##  Ressources
- https://app.diagrams.net  
- https://dev.mysql.com  
- https://sqlbolt.com  
- https://www.mongodb.com/docs  

---

# MODULE 04 – CRUD des annonces

## Objectif du module
Implémenter les opérations **Create, Read, Update, Delete** pour les annonces afin de rendre l’API capable de gérer les données principales du projet.

##  Routes des annonces (MySQL)

| Méthode | Route         | Description |
|---------|---------------|-------------|
| POST    | /ads          | Créer une nouvelle annonce |
| GET     | /ads          | Récupérer toutes les annonces |
| GET     | /ads/:id      | Récupérer une annonce par ID |
| PUT     | /ads/:id      | Modifier une annonce |
| DELETE  | /ads/:id      | Supprimer une annonce |

## Routes des messages (MongoDB)

| Méthode | Route | Description |
|---------|--------|-------------|
| POST    | /messages | Créer un message |
| GET     | /messages | Récupérer tous les messages |
| GET     | /messages/post/:id_post | Messages liés à une annonce |
| GET     | /messages/sent/:id_expeditor | Messages envoyés |
| GET     | /messages/received/:id_sender | Messages reçus |

## Tests
Tester chaque route via **Postman** ou **Insomnia**.  
Commencer avec des données simples avant d’ajouter la base complète.

## Ressource utile
https://restfulapi.net

---

# ▶START

- Ouvrir le terminal : `CTRL + ù`  
- Aller dans le backend : `cd backend`  
- Lancer le serveur : `npm run dev`  

---

# Dépendances principales

### dependencies
- cors  
- dotenv  
- express  
- helmet  
- mongoose  
- mysql2  
- bcrypt  

### devDependencies
- nodemon
