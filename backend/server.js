// ===========================================================
//               SERVER.JS (lance le serveur)
// ===========================================================

// ------------------------ Imports --------------------------
import app from "./app.js";
import routes from "./routes/index_route.js";

import { db_Mysql } from "./config/db_mysql.js";
import { db_Mongo } from "./config/db_mongo.js";

app.use("/api", routes);

// ----------------- config serveur --------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Serveur lancé sur le port ${PORT}`);

    // Connexions BDD
    await db_Mysql();
    await db_Mongo();
});


// Point d'entrée du backend
// Connexion BDD
