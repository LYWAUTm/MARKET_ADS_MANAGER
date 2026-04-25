// ==========================================================
//                         ADS  ROUTES
// ==========================================================

// ------------------------ Imports -------------------------

import express from "express";
import {
    getAllAds,
    createAd,
    updateAd,
    deleteAd,
    getAllAdsByCategory,
    getAllAdsByUser,
    getAllAdsByKeyword,
    getAllAdsByPrice,
    getAdById,
} from "../controllers/ads_controller.js";

const router = express.Router();


// ---------------------- CRUD (NORMALES) ---------------------------

// LIRE toutes les annonces = URL finale("/ads/")
router.get("/", getAllAds);

// CREER une annonce = URL finale("/ads/")
router.post("/", createAd);

// MODIFIER une annonce = URL finale("/ads/123")
router.put("/:id", updateAd);

// SUPPRIMER une annonce = URL finale("/ads/123")
router.delete("/:id", deleteAd);


// ------------------ FILTRES (SPECIFIQUES) ------------------------

// Filtrer par catégorie = URL finale("/ads/category/5")
router.get("/category/:category_id", getAllAdsByCategory);

// Filtrer par utilisateur = URL finale("/ads/user/5")
router.get("/user/:user_id", getAllAdsByUser);

// Filtrer par mot-clé = URL finale("/ads/search/:keyword")
router.get("/search/:keyword", getAllAdsByKeyword);

// Filtrer par prix min/max = URL finale("/ads/price/100/500")
router.get("/price/:min/:max", getAllAdsByPrice);


// ------------------------- GENERIQUE --------------------

// LIRE une annonce via son id = URL finale("/ads/123")
router.get("/:id", getAdById);

export default router;

// FLUX LECTURE EXPRESS (haut -> bas)
// FILTRES -> CRUD -> GENERIQUE (capture toutes les valeurs)
// Les génériques en dernier évite les conflits de position
