// ===========================================================
//                    FAVORITES CONTROLLER
// ===========================================================

import { pool } from "../config/db_mysql.js";


// ---------------------------- GET favoris d’un utilisateur ----------------------------

export const getFavoritesByUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM favorites WHERE user_id = ?",
            [user_id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Aucun favori trouvé" });
        }

        res.status(200).json(rows);

    } catch (error) {
        next(error);
    }
};


// ---------------------------- POST ajouter un favori ----------------------------

export const addFavorite = async (req, res, next) => {
    try {
        const { user_id, ads_id } = req.body;

        if (!user_id || !ads_id) {
            return res.status(400).json({ message: "Champs manquants" });
        }

        // Vérifier doublon
        const [existing] = await pool.query(
            "SELECT * FROM favorites WHERE user_id = ? AND ads_id = ?",
            [user_id, ads_id]
        );

        if (existing.length > 0) {
            return res.status(400).json({ message: "Déjà dans les favoris" });
        }

        await pool.query(
            "INSERT INTO favorites (user_id, ads_id) VALUES (?, ?)",
            [user_id, ads_id]
        );

        res.status(201).json({ message: "Favori ajouté avec succès" });

    } catch (error) {
        next(error);
    }
};


// ---------------------------- DELETE retirer un favori ----------------------------

export const removeFavorite = async (req, res, next) => {
    try {
        const { user_id, ads_id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM favorites WHERE user_id = ? AND ads_id = ?",
            [user_id, ads_id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Favori non trouvé" });
        }

        res.status(200).json({ message: "Favori retiré avec succès" });

    } catch (error) {
        next(error);
    }
};
