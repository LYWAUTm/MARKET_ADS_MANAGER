// ===========================================================
//               SERVER.JS (lance le serveur)
// ===========================================================

// Point d'entrée du backend

import app from "./app.js";
import routes from "./routes/index_route.js";

import { db_Mysql } from "./config/db_mysql.js";
import { db_Mongo } from "./config/db_mongo.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Serveur lancé sur le port ${PORT}`);

    // Connexions BDD
    await db_Mysql();
    await db_Mongo();
});
