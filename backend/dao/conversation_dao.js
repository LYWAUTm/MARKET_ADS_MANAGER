import Conversation from "../models/conversation.model.js";

export default {
    findByAdsId(ads_id) {
        return Conversation.findOne({ ads_id });
    },

    findByUser(user_id) {
        return Conversation.find({ participants: user_id });
    },

    createConversation(data) {
        return Conversation.create(data);
    },

    addMessage(ads_id, message) {
        return Conversation.findOneAndUpdate(
            { ads_id },
            { $push: { messages: message } },
            { new: true }
        );
    },

    addReaction(ads_id, message_id, reaction) {
        return Conversation.findOneAndUpdate(
            { ads_id, "messages._id": message_id },
            { $push: { "messages.$.reactions": reaction } },
            { new: true }
        );
    },

    removeReaction(ads_id, message_id, user_id) {
        return Conversation.findOneAndUpdate(
            { ads_id, "messages._id": message_id },
            { $pull: { "messages.$.reactions": { user_id } } },
            { new: true }
        );
    }
};
