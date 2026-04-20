import express from "express";
import {
    createMessage,
    getMessages,
    getMessagesByPost,
    getMessagesSent,
    getMessagesReceived
} from "../controllers/message_controller.js";

const router = express.Router();

// POST : créer un message
router.post("/", createMessage);

// GET : récupérer tous les messages
router.get("/", getMessages);

// GET : récupérer messages d'une annonce
router.get("/post/:id_post", getMessagesByPost);

// GET : récupérer messages envoyés par un utilisateur
router.get("/sent/:id_expeditor", getMessagesSent);

// GET : récupérer messages reçus par un utilisateur
router.get("/received/:id_sender", getMessagesReceived);

export default router;