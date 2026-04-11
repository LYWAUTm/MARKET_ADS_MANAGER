import express from "express";
const router = express.Router();

// Route GET
router.get("/", (req, res) => {
res.json({ message: "Route users OK" });
});

export default router;