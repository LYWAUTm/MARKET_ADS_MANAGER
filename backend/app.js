// ===========================================================
//             APP.JS (configure l'application)
// ===========================================================

// - -------------------- Imports ---------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet"

import routes from "./routes/index_route.js"
import { errorMiddleware } from "./middlewares/error_middleware.js";


// -------------------- configurations ------------------------

dotenv.config();
const app = express();


// ------------------ middlewares Globaux----------------------

app.use(express.json());
app.use(cors());
app.use(helmet());


// Montage des routes
app.use("/", routes);

// Gestion des erreurs
app.use(errorMiddleware);

export default app;
