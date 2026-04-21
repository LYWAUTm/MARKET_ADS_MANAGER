// =============================================================
//         CONVERSATION MODEL
// =============================================================

import mongoose from "mongoose";


// ------------------- REACTION -------------------
const ReactionSchema = new mongoose.Schema(
    {
        user_id: { type: Number, required: true },
        emoji: { type: String, required: true },
    },
    {
        id: false  /*empêcher création _id à chaque réaction*/
    }
)

// ------------------- MESSAGE -------------------
const MessageSchema = new mongoose.Schema({
    sender_id: { type: Number, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    reactions: { type: [ReactionSchema], default: [] },
})

// ------------------- CONVERSATION -------------------
const ConversationSchema = new mongoose.Schema({
    ads_id: { type: Number, required: true },
    participants: { type: [Number], required: true },
    messages: { type: [MessageSchema], default: [] },
})


// ------------------- EXPORT -------------------
export default mongoose.model("Conversation", ConversationSchema);


// sender_id = expéditeur
// participants = [expéditeur, destinataire]
// ads_id = id annonce
// created_at = date du message

// reaction est imbriqué dans message
// message est imbriqué dans conversation
