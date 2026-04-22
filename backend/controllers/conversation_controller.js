// ============================================================================
//                     CONVERSATION CONTROLLER
// ============================================================================

import {
    getAll,
    getById,
    getByUser,
    getByAds,
    create,
    addMessage,
    addReaction
} from "../dao/conversation_dao.js";


// ---------------------- GET ALL ----------------------

export const getAllConversations = async (req, res) => {
    try {
        const conversations = await getAll();

        return res.status(200).json({
            message: "Liste des conversations récupérée avec succès",
            data: conversations
        });

    } catch (error) {
        console.error("Erreur getAllConversations:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- GET BY ID ----------------------

export const getConversationById = async (req, res) => {
    try {
        const { id } = req.params;
        const conversation = await getById(id);

        if (!conversation) {
            return res.status(404).json({
                message: "Conversation introuvable",
                data: null
            });
        }

        return res.status(200).json({
            message: "Conversation récupérée avec succès",
            data: conversation
        });

    } catch (error) {
        console.error("Erreur getConversationById:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- GET BY USER ----------------------

export const getConversationsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const conversations = await getByUser(userId);

        return res.status(200).json({
            message: conversations.length === 0
                ? "Aucune conversation trouvée pour cet utilisateur"
                : "Conversations récupérées avec succès",
            data: conversations
        });

    } catch (error) {
        console.error("Erreur getConversationsByUser:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- GET BY ADS ----------------------
export const getConversationsByAds = async (req, res) => {
    try {
        const { adsId } = req.params;
        const conversations = await getByAds(adsId);

        return res.status(200).json({
            message: conversations.length === 0
                ? "Aucune conversation trouvée pour cette annonce"
                : "Conversations récupérées avec succès",
            data: conversations
        });

    } catch (error) {
        console.error("Erreur getConversationsByAds:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- CREATE CONVERSATION ----------------------

export const createConversation = async (req, res) => {
    try {
        const data = req.body;
        const newConversation = await create(data);

        return res.status(201).json({
            message: "Conversation créée avec succès",
            data: newConversation
        });

    } catch (error) {
        console.error("Erreur createConversation:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- ADD MESSAGE ----------------------

export const addMessageToConversation = async (req, res) => {
    try {
        const { id } = req.params;
        const message = req.body;

        const updatedConversation = await addMessage(id, message);

        return res.status(200).json({
            message: "Message ajouté avec succès",
            data: updatedConversation
        });

    } catch (error) {
        console.error("Erreur addMessageToConversation:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- ADD REACTION ----------------------

export const addReactionToMessage = async (req, res) => {
    try {
        const { id, messageId } = req.params;
        const reaction = req.body;

        const updatedConversation = await addReaction(id, messageId, reaction);

        return res.status(200).json({
            message: "Réaction ajoutée avec succès",
            data: updatedConversation
        });

    } catch (error) {
        console.error("Erreur addReactionToMessage:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


// ---------------------- DELETE REACTION ----------------------

export const deleteReactionFromMessage = async (req, res) => {
    try {
        const { id, messageId, reactionId } = req.params;

        const updated = await deleteReactionDao(id, messageId, reactionId);

        return res.status(200).json({
            message: "Réaction supprimée avec succès",
            data: updated
        });

    } catch (error) {
        console.error("Erreur deleteReaction:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


/*
Le controller :
- reçoit les requêtes HTTP
- appelle le DAO
- gère les erreurs
- renvoie les réponses JSON harmonisées
- ne contient aucune logique MongoDB
*/
