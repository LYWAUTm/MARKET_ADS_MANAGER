import express from "express";
const router = express.Router();

// Route GET
router.get("/", (req, res) => {
res.json({ message: "Route categories OK" });
});

export default router;