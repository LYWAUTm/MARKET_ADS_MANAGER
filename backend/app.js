// ===========================================================
//             APP.JS (configure l'application)
// ===========================================================

// - -------------------- Imports ---------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet"


// -------------------- configurations ------------------------
dotenv.config();
const app = express();

// -------------------- middlewares --------------------------

app.use(express.json());
app.use(cors());
app.use(helmet());

export default app;
