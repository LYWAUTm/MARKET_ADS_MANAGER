// ============================================================================
//                     CONVERSATION CONTROLLER
// ============================================================================

import * as ConversationDAO from "../dao/conversation.dao.js";

// ---------------------- GET ALL ----------------------
export const getAllConversations = async (req, res) => {
    try {
        const conversations = await ConversationDAO.getAll();
        res.status(200).json(conversations);
    } catch (error) {
        console.error("Erreur getAllConversations:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ---------------------- GET BY ID ----------------------
export const getConversationById = async (req, res) => {
    try {
        const { id } = req.params;
        const conversation = await ConversationDAO.getById(id);

        if (!conversation) {
            return res.status(404).json({ message: "Conversation introuvable" });
        }

        res.status(200).json(conversation);
    } catch (error) {
        console.error("Erreur getConversationById:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ---------------------- GET BY USER ----------------------
export const getConversationsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const conversations = await ConversationDAO.getByUser(userId);
        res.status(200).json(conversations);
    } catch (error) {
        console.error("Erreur getConversationsByUser:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ---------------------- GET BY ADS ----------------------
export const getConversationsByAds = async (req, res) => {
    try {
        const { adsId } = req.params;
        const conversations = await ConversationDAO.getByAds(adsId);
        res.status(200).json(conversations);
    } catch (error) {
        console.error("Erreur getConversationsByAds:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ---------------------- CREATE ----------------------
export const createConversation = async (req, res) => {
    try {
        const data = req.body;
        const newConversation = await ConversationDAO.create(data);
        res.status(201).json(newConversation);
    } catch (error) {
        console.error("Erreur createConversation:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ---------------------- ADD MESSAGE ----------------------
export const addMessageToConversation = async (req, res) => {
    try {
        const { id } = req.params;
        const message = req.body;

        const updatedConversation = await ConversationDAO.addMessage(id, message);

        res.status(200).json(updatedConversation);
    } catch (error) {
        console.error("Erreur addMessageToConversation:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ---------------------- ADD REACTION ----------------------
export const addReactionToMessage = async (req, res) => {
    try {
        const { id, messageId } = req.params;
        const reaction = req.body;

        const updatedConversation = await ConversationDAO.addReaction(id, messageId, reaction);

        res.status(200).json(updatedConversation);
    } catch (error) {
        console.error("Erreur addReactionToMessage:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};


/* Le controller :
- reçoit les requêtes HTTP
- appelle le DAO
- gère les erreurs
- renvoie les réponses JSON
- pas de requête MongoDB
*/