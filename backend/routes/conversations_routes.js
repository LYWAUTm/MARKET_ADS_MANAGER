// ============================================================================
//              CONVERSATION ROUTES = les portes d'entrées
// ============================================================================

import express from "express";
import {
    getAllConversations,
    getConversationById,
    getConversationsByUser,
    getConversationsByAds,
    createConversation,
    addMessageToConversation,
    addReactionToMessage
} from "../controllers/conversation_controller.js";

const router = express.Router();

// ------------------- ROUTES CONVERSATIONS -------------------

// Récupérer toutes les conversations
router.get("/", getAllConversations);

// Récupérer une conversation par ID
router.get("/:id", getConversationById);

// Récupérer les conversations d’un utilisateur
router.get("/user/:userId", getConversationsByUser);

// Récupérer les conversations liées à une annonce
router.get("/ads/:adsId", getConversationsByAds);

// Créer une nouvelle conversation
router.post("/", createConversation);

// Ajouter un message dans une conversation
router.post("/:id/messages", addMessageToConversation);

// Ajouter une réaction à un message
router.post("/:id/messages/:messageId/reactions", addReactionToMessage);

export default router;
