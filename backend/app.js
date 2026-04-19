// ===========================================================
//                          SERVEUR
// ===========================================================

// - --------------- Imports ---------------------

// Dépendances
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

// Routes
import ads_routes from "./routes/ads_routes.js";
import category_routes from "./routes/category_routes.js";
import message_routes from "./routes/message_routes.js";
import user_routes from "./routes/user_routes.js";
import favorites_routes from "./routes/favorites_routes.js";



// ------------------------ config -----------------------

dotenv.config();
// création instance app est un objet
const app = express();
// parse les requêtes en json


// -------------------- middlewares --------------------------

app.use(express.json());
// sert à filtrer les entrées ( à définir) plusieurs possible
app.use(cors());
// filtre les header des URL (une sécurité)
app.use(helmet());


// ------------------------ Routes API ------------------------

app.use("/ads", ads_routes);
app.use("/categories", category_routes);
app.use("/messages", message_routes);
app.use("/users", user_routes);
app.use("/favorites", favorites_routes);


export default app;
