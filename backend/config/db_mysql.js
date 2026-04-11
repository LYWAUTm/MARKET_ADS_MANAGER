// ===========================================================
//                      BDD MYSQL
// ===========================================================

// - --------------- Imports dépendances ---------------------

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


// - --------------- Connexion MySQL ---------------------

export const db_Mysql = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        });

        console.log("MySQL connecté");
        return connection;
    } catch (error) {
        console.error("Erreur connexion MySQL :", error);
    }
};