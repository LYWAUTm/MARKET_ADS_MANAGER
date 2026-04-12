// ===========================================================
//                          SERVEUR
// ===========================================================

// - --------------- Imports dépendances ---------------------

import express from "express";
import dotenv from "dotenv";
import { pool, db_Mysql } from "./config/db_mysql.js";
import { db_Mongo } from "./config/db_mongo.js";


// ------------------------ config API -----------------------

dotenv.config();
const app = express();
app.use(express.json());


// --------------------- Imports routes ----------------------

import ads_routes from "./routes/ads_routes.js";
import category_routes from "./routes/category_routes.js";
import message_routes from "./routes/message_routes.js";
import user_routes from "./routes/user_routes.js";


// ------------------------ Routes API ------------------------

app.use("/ads", ads_routes);
app.use("/categories", category_routes);
app.use("/messages", message_routes);
app.use("/users", user_routes);



// --------------------- Lancement serveur --------------------

app.listen(process.env.PORT, async () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
    
    // Connexions BDD 
    await db_Mysql();
    db_Mongo();
});