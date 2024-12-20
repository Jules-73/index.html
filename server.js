const express = require('express');
const path = require('path');
const cors = require('cors'); // Optionnel : pour éviter les problèmes de CORS

const app = express();
const port = 3000;

// Servir les fichiers statiques (HTML, CSS, JS) depuis le dossier public
app.use(express.static(path.join(__dirname, 'public')));

// Activer CORS (optionnel, mais recommandé si tu accèdes au serveur depuis un autre domaine)
app.use(cors());

// Définir une route pour ton API
app.get('/api/exec', (req, res) => {
    try {
        let result = "Hello from Node.js!"; // Exemple de réponse
        res.json({ message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
