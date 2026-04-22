// =============================================================
//           D.A.O (Data Access Object) — Mongoose
// =============================================================

import Conversation from "../models/conversation_model.js";

// Récupérer toutes les conversations
export const getAll = () => {
    return Conversation.find();
};

// Récupérer une conversation par ID
export const getById = (id) => {
    return Conversation.findById(id);
};

// Récupérer toutes les conversations d’un utilisateur
export const getByUser = (user_id) => {
    return Conversation.find({ participants: user_id });
};

// Récupérer une conversation par annonce
export const getByAds = (ads_id) => {
    return Conversation.findOne({ ads_id });
};

// Créer une conversation
export const create = (data) => {
    return Conversation.create(data);
};

// Ajouter un message
export const addMessage = (conversation_id, message) => {
    return Conversation.findByIdAndUpdate(
        conversation_id,
        { $push: { messages: message } },
        { new: true }
    );
};

// Ajouter une réaction
export const addReaction = (conversation_id, message_id, reaction) => {
    return Conversation.findOneAndUpdate(
        { _id: conversation_id, "messages._id": message_id },
        { $push: { "messages.$.reactions": reaction } },
        { new: true }
    );
};

export const deleteReactionDao = async (conversationId, messageId, reactionId) => {
    return await Conversation.findOneAndUpdate(
        { _id: conversationId, "messages._id": messageId },
        { $pull: { "messages.$.reactions": { _id: reactionId } } },
        { new: true }
    );
};
