// ==============================================================================================
//                                     ADS  CONTROLLER
// ==============================================================================================

import { pool } from "../config/db_mysql.js";

// ==============================================================================================
//                                          CRUD
// ==============================================================================================

// GET (getAllAds) afficher toutes les annonces sinon tableau vide
export const getAllAds = async (req, res, next) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM ads ORDER BY publication_date DESC"
        );

        return res.status(200).json({
            message: "Liste des annonces récupérée avec succès",
            data: rows
        });

    } catch (error) {
        next(error);
    }
};


// GET (getAdById) afficher une annonce par ID
export const getAdById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE ads_id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Annonce non trouvée",
                data: null
            });
        }

        return res.status(200).json({
            message: "Annonce récupérée avec succès",
            data: rows[0]
        });

    } catch (error) {
        next(error);
    }
};


// POST (createAd) créer une annonce
export const createAd = async (req, res, next) => {
    try {
        const { title, description, price, location, user_id, category_id } = req.body;

        if (!title || !description || !price || !location || !user_id || !category_id) {
            return res.status(400).json({
                message: "Remplissez tous les champs obligatoires",
                data: null
            });
        }

        const [result] = await pool.query(
            "INSERT INTO ads (title, description, price, location, user_id, category_id) VALUES (?, ?, ?, ?, ?, ?)",
            [title, description, price, location, user_id, category_id]
        );

        return res.status(201).json({
            message: "Annonce créée avec succès",
            data: { ads_id: result.insertId }
        });

    } catch (error) {
        next(error);
    }
};


// PUT (updateAd) modifier une annonce
export const updateAd = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, price, location, category_id } = req.body;

        const [result] = await pool.query(
            "UPDATE ads SET title = ?, description = ?, price = ?, location = ?, category_id = ? WHERE ads_id = ?",
            [title, description, price, location, category_id, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Annonce non trouvée",
                data: null
            });
        }

        return res.status(200).json({
            message: "Annonce mise à jour avec succès",
            data: { ads_id: id }
        });

    } catch (error) {
        next(error);
    }
};


// DELETE (deleteAd) supprimer une annonce
export const deleteAd = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM ads WHERE ads_id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Annonce non trouvée",
                data: null
            });
        }

        return res.status(200).json({
            message: "Annonce supprimée avec succès",
            data: { ads_id: id }
        });

    } catch (error) {
        next(error);
    }
};


// ======================================================================================
//                                FILTRES
// ======================================================================================

// GET filtrer par CATEGORY
export const getAllAdsByCategory = async (req, res, next) => {
    try {
        const { category_id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE category_id = ? ORDER BY publication_date DESC",
            [category_id]
        );

        return res.status(200).json({
            message: rows.length === 0
                ? "Aucune annonce trouvée pour cette catégorie"
                : "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        next(error);
    }
};


// GET filtrer par USER
export const getAllAdsByUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE user_id = ? ORDER BY publication_date DESC",
            [user_id]
        );

        return res.status(200).json({
            message: rows.length === 0
                ? "Aucune annonce trouvée pour cet utilisateur"
                : "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        next(error);
    }
};


// GET filtrer par KEYWORD
export const getAllAdsByKeyword = async (req, res, next) => {
    try {
        const { keyword } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE title LIKE ? OR description LIKE ? OR location LIKE ? ORDER BY publication_date DESC",
            [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`]
        );

        return res.status(200).json({
            message: rows.length === 0
                ? "Aucune annonce trouvée avec ce mot-clé"
                : "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        next(error);
    }
};


// GET filtrer par PRICE MIN/MAX
export const getAllAdsByPrice = async (req, res, next) => {
    try {
        const { min, max } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM ads WHERE price BETWEEN ? AND ? ORDER BY price ASC",
            [min, max]
        );

        return res.status(200).json({
            message: rows.length === 0
                ? "Aucune annonce trouvée dans cette fourchette de prix"
                : "Annonces filtrées avec succès",
            data: rows
        });

    } catch (error) {
        next(error);
    }
};
