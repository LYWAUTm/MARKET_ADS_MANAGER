// ===========================================================
//        APP.JS (configure l'application)
// ===========================================================

// - ---------------------- Imports --------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet"


// ------------------------ config ---------------------------
dotenv.config();

const app = express();

// -------------------- middlewares --------------------------

app.use(express.json());
app.use(cors());
app.use(helmet());

// --------------------- Routes API --------------------------

app.use("/ads", ads_routes);
app.use("/categories", category_routes);
app.use("/messages", message_routes);
app.use("/users", user_routes);
app.use("/favorites", favorites_routes);

export default app;
