// ==============================================================================================
//                      ERROR MIDDLEWARE
// ==============================================================================================


export const errorMiddleware = (err, req, res, next) => {
    console.error("ERREUR :", err.message);

    const status = err.status || 500;

    res.status(status).json({
        success: false,
        message: err.message || "Erreur serveur",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};

/* 4 règles de fonctionnement :
- 4 Params (err, res, req, next)
- être placé après toutes les routes (app.use(""))
- récupère les erreurs via nex(error) dans le controller
- remplace tous les "res.status(500).json(...)"
*/
