import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    expeditor_id: { type: Number, required: true },   // 1. expéditeur
    sender_id: { type: Number, required: true },      // 2. destinataire
    ads_id: { type: Number, required: true },         // 3. annonce
    content: { type: String, required: true },         // 4. contenu
    send_date: { type: Date, default: Date.now }       // 5. date

});

export default mongoose.model("Message", messageSchema);

// expeditor_id : ID utilisateur écrivant le message
// sender_id    : ID utilisateur recevant le message
// ads_id      : ID annonce concernée par le message


// version complète de message_model deviendra conversation.model.js
/*
const mongoose = require('mongoose')


const ReactionSchema = new mongooseSchema({
  user_id: {type:Number, required:true}, 
  emoji: { type: String, required: true},
}, { _id:false })


const MessageSchema = new mongooseShema({
    sender_id : {type: Number, required: true}, 
    content: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    reactions : {type : [ReactionSchema], default:[]},
})


const ConversationSchema = new mongoose.Schema({
  post_id : {type:Number, required:true},
  participants: {type: [Number], required: true},
  messages : { type: [MessageSchema], default: []},
})

const conversationModel = mongoose.model('Conversation', ConversationSchema)

moddule.exports = conversationModel

*/