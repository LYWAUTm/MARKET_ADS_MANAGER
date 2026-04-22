// ===========================================================
//                      DB MONGODB
// ===========================================================

// - --------------- Imports dépendances ---------------------

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


// - --------------- Connexion MongoDB ---------------------

export const db_Mongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connecté via mongoose");
    } catch (error) {
        console.error("Erreur de connexion MongoDB :", error);
    }
};

// Rajouter titre database dans l'URI