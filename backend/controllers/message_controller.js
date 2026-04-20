// ===========================================================
//            MESSAGE CONTROLLER
// ===========================================================

import Message from "../models/mongo/messages_model.js";


// --------------- POST créer un message -----------------

export const createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);

        res.status(201).json(message);
        
    } catch (error) {
        console.error("Erreur dans message_controller createMessage :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// --------- GET récupérer tous les messages -------------

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ send_date: -1 });

        res.status(200).json(messages);
        
    } catch (error) {
        console.error("Erreur dans message_controller getMessages :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ------- GET récupérer les messages d'une annonce (ads_id) -------------

export const getMessagesByPost = async (req, res) => {
    try {
        const { id_post } = req.params;

        const messages = await Message.find({ ads_id: Number(id_post) })
            .sort({ send_date: -1 });

        res.status(200).json(messages);

    } catch (error) {
        console.error("Erreur dans message_controller getMessagesByPost :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ------ GET récupérer les messages envoyés par un utilisateur (expeditor_id) ------

export const getMessagesSent = async (req, res) => {
    try {
        const { id_expeditor } = req.params;

        const messages = await Message.find({ expeditor_id: Number(id_expeditor) })
            .sort({ send_date: -1 });

        res.status(200).json(messages);

    } catch (error) {
        console.error("Erreur dans message_controller getMessagesSent :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ------- GET récupérer les messages reçus par un utilisateur (sender_id) ------

export const getMessagesReceived = async (req, res) => {
    try {
        const { id_sender } = req.params;

        const messages = await Message.find({ sender_id: Number(id_sender) })
            .sort({ send_date: -1 });

        res.status(200).json(messages);

    } catch (error) {
        console.error("Erreur dans message_controller getMessagesReceived :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ------- PUT mettre à jour un message --------

export const updateMessage = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Message.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Message non trouvé" });
        }

        res.status(200).json(updated);

    } catch (error) {
        console.error("Erreur dans message_controller updateMessage :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};

// ------- DELETE supprimer un message --------

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Message.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ error: "Message non trouvé" });
        }

        res.status(200).json({ message: "Message supprimé avec succès" });

    } catch (error) {
        console.error("Erreur dans message_controller deleteMessage :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
