import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    id_expeditor: { type: Number, required: true },
    id_sender: { type: Number, required: true },
    id_post: { type: Number, required: true },
    content: { type: String, required: true },
    send_date: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);

// id_expeditor : ID utilisateur écrivant le message
// id_sender    : ID utilisateur recevant le message
// id_post      : ID annonce concernée par le message