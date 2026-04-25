// ===========================================================
//               SERVER.JS (lance le serveur)
// ===========================================================

// ------------------------ Imports --------------------------

import app from "./app.js";
import { db_Mysql } from "./config/db_mysql.js";
import { db_Mongo } from "./config/db_mongo.js";


// ----------------- Connexions BDD --------------------------

export const startServer = async () => {
    try {
        await db_Mysql();
        await db_Mongo();

        // ---------- Démarrage du serveur -------------------

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, async () => {
            console.log(`Serveur lancé sur le port ${PORT}`);
        });

    } catch (error) {
        console.error("Erreur au démarrage du serveur", error);
        throw error;
    }
};

await startServer();


// Création fonction startServer = lancement du serveur
// flux startServer() -> 1.Connexion BDD -> 2.Config Routes -> 3.Lancement du serveur
// Point d'entrée du backend
// Connexion à la BDD
