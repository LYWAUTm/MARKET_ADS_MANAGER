// ===========================================================
//        INDEX ROUTES (centralise toutes les routes)
// ===========================================================

// ------------------------ dépendances ---------------------------

import express from "express";
const router = express.Router();

// --------------------- Imports de Routes --------------------------

import ads_routes from "./ads_routes.js";
import categories_routes from "./categories_routes.js";
import users_routes from "./users_routes.js";
import favorites_routes from "./favorites_routes.js";
import conversations_routes from "./conversations_routes.js";


// --------------------- Config Routes API --------------------------

router.use("/ads", ads_routes);
router.use("/categories", categories_routes);
router.use("/users", users_routes);
router.use("/favorites", favorites_routes);
router.use("/conversations", conversations_routes);

export default router;
