// Configuration de la requête d'authentification
const authRequest = {
    url: 'https://votre-api.com/login',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            username: "votre_utilisateur",
            password: "votre_password"
        })
    }
};

// Envoi de la requête avant l'appel principal
pm.sendRequest(authRequest, (err, response) => {
    if (err) {
        console.log("Erreur lors de l'auth : " + err);
    } else {
        const jsonData = response.json();
        // On enregistre le token dans une variable de collection
        pm.collectionVariables.set("my_access_token", jsonData.token);
        console.log("Token mis à jour avec succès !");
    }
});