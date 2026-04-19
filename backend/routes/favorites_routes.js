// ==========================================================
//                      FAVORITES ROUTES
// ==========================================================

import express from "express";
import {
    getFavoritesByUser,
    addFavorite,
    removeFavorite
} from "../controllers/favorites_controller.js";

const router = express.Router();


// ------------------------ FAVORIS ----------------------------

// Récupérer les favoris d’un utilisateur = URL finale("/favorites/5")
router.get("/:user_id", getFavoritesByUser);

// Ajouter un favori = URL finale("/favorites/")
router.post("/", addFavorite);

// Retirer un favori = URL finale("/favorites/5/12")
router.delete("/:user_id/:ads_id", removeFavorite);


export default router;
