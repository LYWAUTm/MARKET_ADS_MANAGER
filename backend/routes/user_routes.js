// ==========================================================
//                         USERS ROUTES
// ==========================================================

import express from "express";
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
router.get("/", getUsers);

// Récupérer un utilisateur via son id = URL finale("/users/123")
router.get("/:id", getUserById);

// Créer un utilisateur = URL finale("/users/")
router.post("/", createUser);

// Modifier un utilisateur = URL finale("/users/123")
router.put("/:id", updateUser);

// Supprimer un utilisateur = URL finale("/users/123")
router.delete("/:id", deleteUser);


export default router;
