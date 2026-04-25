// ==========================================================
//                         USERS ROUTES
// ==========================================================

import express from "express";
import { authMiddleware } from "../middlewares/auth_middleware.js";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/users_controller.js";

const router = express.Router();


// ------------------------ CRUD ----------------------------

// Récupérer tous les utilisateurs = URL finale("/users/")
router.get("/", authMiddleware, getUsers);

// Récupérer un utilisateur via son id = URL finale("/users/123")
router.get("/:id", authMiddleware, getUserById);

// Créer un utilisateur = URL finale("/users/")
router.post("/", authMiddleware, createUser);

// Modifier un utilisateur = URL finale("/users/123")
router.put("/:id", authMiddleware, updateUser);

// Supprimer un utilisateur = URL finale("/users/123")
router.delete("/:id", authMiddleware, deleteUser);


export default router;
