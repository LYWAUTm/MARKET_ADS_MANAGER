// ==========================================================
//                         AUTH CONTROLLER
// ==========================================================

// ------------------------ Imports -------------------------

import { pool } from "../config/db_mysql.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// ------------------------ REGISTER -------------------------

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "champs manquants"
            });
        }

        const [existing] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (existing.length > 0) {
            return res.status(400).json({
                message: "Email déjà utilisé"
            });
        }

        // HASH PASSWORD
        const hashed = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashed]
        );

        res.status(201).json({
            message: "compte créé",
            user_id: result.insertId
        });

    } catch (error) {
        next(error);
    }
};


// ------------------------ LOGIN -------------------------

export const login = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        const [rows] = await pool.query(
            "SELECT * FROM  users WHERE email = ?",
            [email]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Email incorrect" })
        };

        const user = rows[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        // création JWT_TOKEN
        const token = jwt.sign(
            { id: user.user_id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" },
        );

        res.status(200).json({
            message: "Connexion réussie",
            token,
            user: {
                id: user.user_id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        next(error);
    }
};