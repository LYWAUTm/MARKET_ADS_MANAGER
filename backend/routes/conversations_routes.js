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

// ------------------- ROUTES CONVERSATIONS -----------------------------

// Récupérer toutes les conversations
router.get("/", getAllConversations);

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

// Supprimer une réaction d’un message
router.delete("/:id/messages/:messageId/reactions/:reactionId", deleteReactionFromMessage);


// ------------------- ROUTE GENERIQUE ---------------------------------

// Récupérer une conversation par ID
router.get("/:id", getConversationById);
export default router;

// pas de CRUD car pas une ressource CRUD classique
//Route générique en dernier pour éviter les conflits de position