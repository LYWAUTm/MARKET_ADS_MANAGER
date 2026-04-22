// ===========================================================
//               SERVER.JS (lance le serveur)
// ===========================================================

// ------------------------ Imports --------------------------

import { db_Mysql } from "./config/db_mysql.js";
import { db_Mongo } from "./config/db_mongo.js";

import app from "./app.js";
import routes from "./routes/index_route.js";


// ----------------- Connexions BDD --------------------------

export const startServer = async () => {
    try {
        await db_Mysql();
        await db_Mongo();

        // ---configuration des Routes après connexion BDD ---

        app.use("/", routes);

        // ---------- Démarrage du serveur -------------------

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, async () => {
            console.log(`Serveur lancé sur le port ${PORT}`);
        });

    } catch (error) {
        console.error("Erreur au démarrage du serveur", error);
    }
};

startServer();

// Création fonction startServer = lancement du serveur
// flux startServer() -> 1.Connexion BDD -> 2.Config Routes -> 3.Lancement du serveur
// Point d'entrée du backend
// Connexion à la BDD
