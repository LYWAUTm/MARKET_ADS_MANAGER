// ===========================================================
//            MESSAGE CONTROLLER
// ===========================================================


import Message from "../models/mongo/messages_model.js"


// --------------- POST créer un message -----------------

export const createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// --------- GET récupérer tous les messages -------------

export const getMessages = async (req, res) => {
    try {
        const message = await Message.find().sort({ send_date: -1 });
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ------- GET (id_post) récupérer les messages d'une annonce -------------

export const getMessagesByPost = async (req, res) => {
    try {
        const { id_post } = req.params;
        const messages = await Message.find({ id_post }).sort({ send_date: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ------ GET (id_expeditor) récupérer les messages envoyés par un utilisateur ------

export const getMessagesSent = async (req, res) => {
    try {
        const { id_expeditor } = req.params;
        const messages = await Message.find({ id_expeditor }).sort({ send_date: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ------- GET (id_sender) récupérer les messages reçus par un utilisateur ------

export const getMessagesReceived = async (req, res) => {
    try {
        const { id_sender } = req.params;
        const messages = await Message.find({ id_sender }).sort({ send_date: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
