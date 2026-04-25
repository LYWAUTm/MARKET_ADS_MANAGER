// =========================================================================================
//                        USERS CONTROLLER
// =========================================================================================

import { pool } from "../config/db_mysql.js";
import bcrypt from "bcrypt";


// ---------------------------- GET (getUsers) tous les utilisateurs ----------------------------

export const getUsers = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users ORDER BY creation_date DESC");

        if (rows.length === 0) {
            return res.status(404).json({ message: "Aucun utilisateur trouvé" });
        }

        res.status(200).json(rows);

    } catch (error) {
        next(error);
    }
};


// ---------------------------- GET (getUserById) utilisateur par ID ----------------------------

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM users WHERE user_id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json(rows[0]);

    } catch (error) {
        next(error);
    }
};


// ---------------------------- POST (createUser) créer un utilisateur ----------------------------

export const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires" });
        }

        // Vérif si email unique
        const [existing] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (existing.length > 0) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        res.status(201).json({
            message: "Utilisateur créé avec succès",
            user_id: result.insertId
        });

    } catch (error) {
        next(error);
    }
};


// ---------------------------- PUT modifier un utilisateur ----------------------------

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const [result] = await pool.query(
            "UPDATE users SET name = ?, email = ? WHERE user_id = ?",
            [name, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({ message: "Utilisateur mis à jour avec succès" });

    } catch (error) {
        next(error);
    }
};


// ---------------------------- DELETE supprimer un utilisateur ----------------------------

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM users WHERE user_id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({ message: "Utilisateur supprimé avec succès" });

    } catch (error) {
        next(error);
    }
};
