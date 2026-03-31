import express from "express";
import nunjucks from "nunjucks";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PUBLIC
app.use(express.static(path.join(__dirname, "../frontend/public")));

// NUNJUCKS
nunjucks.configure(path.join(__dirname, "../frontend/components/pages"), {
    autoescape: true,
    express: app,
    watch: true
});

// ROUTE TEST
app.get("/", (req, res) => {
    res.render("home.njk", { title: "Accueil"});
});

export default app;