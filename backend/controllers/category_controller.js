// ===========================================================
//                    CATEGORIES CONTROLLER
// ===========================================================

import { pool } from "../config/db_mysql.js";


// ---------------------------- GET toutes les catégories ----------------------------

export const getCategories = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM categories ORDER BY category_id ASC");

        if (rows.length === 0) {
            return res.status(404).json({ message: "Aucune catégorie trouvée" });
        }

        res.status(200).json(rows);

    } catch (error) {
        console.error("Erreur dans category_controller getCategories :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ---------------------------- GET catégorie par ID ----------------------------

export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM categories WHERE category_id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        res.status(200).json(rows[0]);

    } catch (error) {
        console.error("Erreur dans category_controller getCategoryById :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ---------------------------- POST créer une catégorie ----------------------------

export const createCategory = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Le titre est obligatoire" });
        }

        const [result] = await pool.query(
            "INSERT INTO categories (title) VALUES (?)",
            [title]
        );

        res.status(201).json({
            message: "Catégorie créée avec succès",
            category_id: result.insertId
        });

    } catch (error) {
        console.error("Erreur dans category_controller createCategory :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ---------------------------- PUT modifier une catégorie ----------------------------

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const [result] = await pool.query(
            "UPDATE categories SET title = ? WHERE category_id = ?",
            [title, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        res.status(200).json({ message: "Catégorie mise à jour avec succès" });

    } catch (error) {
        console.error("Erreur dans category_controller updateCategory :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ---------------------------- DELETE supprimer une catégorie ----------------------------

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM categories WHERE category_id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        res.status(200).json({ message: "Catégorie supprimée avec succès" });

    } catch (error) {
        console.error("Erreur dans category_controller deleteCategory :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
