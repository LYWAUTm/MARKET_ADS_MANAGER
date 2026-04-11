import express from "express";
const router = express.Router();

// Route GET
router.get("/", (req, res) => {
res.json({ message: "Route ads OK" });
});

export default router;