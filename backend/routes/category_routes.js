// ==========================================================
//                      CATEGORIES ROUTES
// ==========================================================

import express from "express";
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/category_controller.js";

const router = express.Router();


// ------------------------ CRUD ----------------------------

// Récupérer toutes les catégories = URL finale("/categories/")
router.get("/", getCategories);

// Récupérer une catégorie via son id = URL finale("/categories/5")
router.get("/:id", getCategoryById);

// Créer une catégorie = URL finale("/categories/")
router.post("/", createCategory);

// Modifier une catégorie = URL finale("/categories/5")
router.put("/:id", updateCategory);

// Supprimer une catégorie = URL finale("/categories/5")
router.delete("/:id", deleteCategory);


export default router;
