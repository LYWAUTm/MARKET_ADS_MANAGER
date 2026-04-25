// ==============================================================================================
//                         AUTH MIDDLEWARE
// ==============================================================================================

import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token manquant"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        console.error( error, "Token invalide" );
        return res.status(403).json({ message: "Token invalide" });
    }
};

// 1. Récupération token dans le header
// 2. Si absent -> status(401)
// 3. Vérif du token via jwt.verify()
// 2. Si invalide -> status(403)
// 5. Si token valide ajoute decoded:(info token)
// 6. Appelle next() -> passe au controller

