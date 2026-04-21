// ==============================================================================================
//                                     ADS  CONTROLLER
// ==============================================================================================

// Importations

import { pool } from "../config/db_mysql.js";


// ==============================================================================================
//                                          CRUD
// ==============================================================================================


// GET (getAllAds) afficher toutes les annonces
export const getAllAds = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM ads ORDER BY publication_date DESC"
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Aucune annonce trouvée"
            });
        }

        res.status(200).json(rows);

    } catch (error) {
        console.error(error, "Erreur dans ads_controller getAllAds");
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// GET (getAdById) afficher une annonce par ID

export const getAdById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE ads_id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Annonce non trouvée"
            });
        }

        res.status(200).json(rows[0]);

    } catch (error) {
        console.error("Erreur dans ads_controller getAdById", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};


// POST (createAd) créer une annonce

export const createAd = async (req, res) => {
    try {
        const { title, description, price, location, user_id, category_id } = req.body;

        if (!title || !description || !price || !location || !user_id || !category_id) {
            return res.status(400).json({
                message: "Remplissez tous les champs obligatoire."
            });
        }

        const [result] = await pool.query(
            "INSERT INTO ads (title, description, price, location, user_id, category_id) VALUES (?, ?, ?, ?, ?, ?)",
            [title, description, price, location, user_id, category_id]
        );

        res.status(201).json({
            message: "Annonce créée avec succès",
            ads_id: result.insertId
        });

    } catch (error) {
        console.error("Erreur dans ads_controller createAd", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// PUT (updateAd) modifier une annonce

export const updateAd = async (req, res) => {
    try {
        const { id } = req.params;

        const { title, description, price, location, category_id } = req.body;

        const [result] = await pool.query(
            "UPDATE ads SET title = ?, description = ?, price = ?, location = ?, category_id = ? WHERE ads_id = ?",
            [title, description, price, location, category_id, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Annonce non trouvée" });
        }

        res.status(200).json({ messages: "Annonce mise à jour avec succès" });

    } catch (error) {
        console.error("Erreur dans ads_controller updateAd", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};


// DELETE (deleteAd) supprimer une annonces

export const deleteAd = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM ads WHERE ads_id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Annonce non trouvée"
            });
        }

        res.status(200).json({ message: "Annonce supprimée avec succès" });

    } catch (error) {
        console.error(error, "Erreur dans ads_controller deleteAd");
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// ==============================================================================================
//                                            FILTRES
// ==============================================================================================


// GET filtrer annonces par catégorie

export const getAdsByCategory = async (req, res) => {
    try {
        const { category_id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE category_id = ? ORDER BY publication_date DESC",
            [category_id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Aucune annonces trouvées pour cette catégorie"
            });
        }

        res.status(200).json({
            message: "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        console.error("Erreur dans ads_controller getAdsByCategory", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// GET filtrer annonces par utilisateurs

export const getAdsByUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE user_id = ? ORDER BY publication_date DESC",
            [user_id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Aucune annonces trouvées pour cet utilisateur"
            });
        }

        res.status(200).json({
            message: "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        console.error("Erreur dans ads_controller getAdsByUser", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// GET filtrer annonces par mot-clé

export const getAdsByKeyword = async (req, res) => {
    try {
        const { keyword } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE title LIKE ? OR description LIKE ? OR location LIKE ? ORDER BY publication_date DESC",
            [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Aucune annonces trouvées avec ce mot-clé"
            });
        }

        res.status(200).json({
            message: "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        console.error("Erreur dans ads_controller getAdsByKeyword", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};


// GET filtrer annonces par prix min/max

export const getAdsByPrice = async (req, res) => {
    try {
        const { min, max } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE price BETWEEN ? AND ? ORDER BY price ASC",
            [min, max]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Aucune annonces trouvées dans ces prix"
            });
        }

        res.status(200).json({
            message: "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        console.error("Erreur dans ads_controller getAdsByPrice", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
