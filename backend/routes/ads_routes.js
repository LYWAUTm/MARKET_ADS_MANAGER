// ==========================================================
//                         ADS  ROUTES
// ==========================================================


import express from "express";
import {
    getAds,
    getAdById,
    createAd,
    updateAd,
    deleteAd,
    getAdsByCategory,
    getAdsByUser,
    getAdsByKeyword,
    getAdsByPrice,
} from "../controllers/ads_controller.js";

const router = express.Router();


// ------------------------ CRUD ----------------------------

// Récupérer toutes les annonces = URL finale("/ads/")
router.get("/", getAds);


// Récupérer une annonce via son id = URL finale("/ads/123")
router.get("/:id", getAdById);


// Créer une annonce = URL finale("/ads/")
router.post("/", createAd);


// Modifier une annonce = URL finale("/ads/123")
router.put("/:id", updateAd);


// Supprimer une annonce = URL finale("/ads/123")
router.delete("/:id", deleteAd);


// ------------------------ FILTRES ----------------------------


// Filtrer par catégorie = URL finale("/ads/category/5")
router.get("/category/:category_id", getAdsByCategory);


// Filtrer par utilisateur = URL finale("/ads/user/5")
router.get("/user/:user_id", getAdsByUser);


// Filtrer par mot-clé = URL finale("/ads/search/:keyword")
router.get("/search/:keyword", getAdsByKeyword);


// Filtrer par prix min/max = URL finale("/ads/price/100/500")
router.get("/price/:min/:max", getAdsByPrice);


export default router;