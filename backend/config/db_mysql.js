// ===========================================================
//                      BDD MYSQL
// ===========================================================

// - --------------- Imports dépendances ---------------------

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


// - ----------- création pool mysql ------------------------------

export const pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit:10,
            queueLimit:0
});


// ------------ Test connexion -------------------------

export const db_Mysql = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("MySQL pool connecté");
        connection.release();
    } catch (error) {
        console.error("Erreur connexion MySQL pool :", error);
    }
};

// création du pool pour avoir un canal ouvert permanent 
// possibilités remplacer à chaque ligne du pool MYSQL_HOST par DB_HOST
// MYSQL_HOST utilisé pour diffrencier de MongoDB
// db_Mysql réutiliser dans server.js pour tester le démarrage