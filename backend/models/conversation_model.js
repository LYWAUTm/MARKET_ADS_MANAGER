// =============================================================
//                  CONVERSATION MODEL = structure des données
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

/* Conversation :
- nom de la collection créer
- un objet réutiliser dans les fonctions du DAO 
- une annonce (ads_id)
- 2 participants ( [expéditeur, destinataire] )
- 1 liste de messages imbriqués ( messages[])
- Les messages peuvent avoir des réactions(réactions[])

Le modèle Conversation = structure des données.
