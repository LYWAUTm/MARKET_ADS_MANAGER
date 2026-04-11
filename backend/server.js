// ===========================================================
//                          SERVEUR
// ===========================================================

// - --------------- Imports dépendances ---------------------

import express from "express";
import dotenv from "dotenv";
import { db_Mysql } from "./config/db_mysql.js";
import { db_Mongo } from "./config/db_mongo.js";


// --------------------- Imports routes ----------------------

import ads_routes from "./routes/ads_routes.js";
import category_routes from "./routes/category_routes.js";
import message_routes from "./routes/message_routes.js";
import user_routes from "./routes/user_routes.js";


// ------------------------ config API -----------------------

dotenv.config();
const app = express();
app.use(express.json());


// ------------------------ Routes API ------------------------

app.use("/ads", ads_routes);
app.use("/categories", category_routes);
app.use("/messages", message_routes);
app.use("/users", user_routes);


// ------------------------ Route de test BDD ------------------------

app.get("/test-db", async (req, res) => {
    try {
        // Test MySQL
        const mysql = await db_Mysql();
        const [rows] = await mysql.query("SELECT 1 + 1 AS result");

        // Test MongoDB
        await db_Mongo();

        res.json({
            mysql: "OK",
            mongo: "OK",
            mysql_result: rows[0].result
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --------------------- Lancement serveur --------------------

app.listen(process.env.PORT, async () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
    
    // Connexions BDD 
    await db_Mysql();
    db_Mongo();
});