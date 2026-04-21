/*

import conversationModel from "../conversation_model.js"

const conversationRepository = {
findAll,
findById,
Create,
}

async function findAll() {
    return await conversationModel.find()
}

async function findById(id) {
    return await conversationModel.findById(id)
}

async function create(data) {
    const conversation = new conversationModel(data)
    return conversation.save()
}


async function addMessage(conversationId, message){
  return await conversationModel.findByIdAndUpdate(
    conversationId,
    {$push : { messages : message }},
    { new : true }
  )
}


async function addReaction(conversationId, messageId, reaction){
  return await ConversationModel.findByIdAndUpdate(
    {_id: conversationId, 'messages_id': messageId },
    {$push : { 'message.$.reactions': reaction } },
    {new : true}
)
}
*/ 