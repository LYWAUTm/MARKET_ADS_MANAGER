// ============================================================================
//              CONVERSATION ROUTES = les portes d'entrées
// ============================================================================

import express from "express";
import { authMiddleware } from "../middlewares/auth_middleware.js";
import {
    getAllConversations,
    getConversationById,
    getConversationsByUser,
    getConversationsByAds,
    createConversation,
    addMessageToConversation,
    addReactionToMessage,
    deleteReactionFromMessage
} from "../controllers/conversation_controller.js";

const router = express.Router();

// ------------------- ROUTES CONVERSATIONS -----------------------------

// Récupérer toutes les conversations
router.get("/", authMiddleware, getAllConversations);

// Récupérer les conversations d’un utilisateur
router.get("/user/:userId", authMiddleware, getConversationsByUser);

// Récupérer les conversations liées à une annonce
router.get("/ads/:adsId", authMiddleware, getConversationsByAds);

// Créer une nouvelle conversation
router.post("/", authMiddleware, createConversation);

// Ajouter un message dans une conversation
router.post("/:id/messages", authMiddleware, addMessageToConversation);

// Ajouter une réaction à un message
router.post("/:id/messages/:messageId/reactions", authMiddleware, addReactionToMessage);

// Supprimer une réaction d’un message
router.delete("/:id/messages/:messageId/reactions/:reactionId", authMiddleware, deleteReactionFromMessage);


// ------------------- ROUTE GENERIQUE ---------------------------------

// Récupérer une conversation par ID
router.get("/:id", authMiddleware, getConversationById);
export default router;

// pas de CRUD car pas une ressource CRUD classique
//Route générique en dernier pour éviter les conflits de position