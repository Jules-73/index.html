const express = require('express');
const path = require('path'); // Permet de manipuler les chemins de fichiers
const cors = require('cors'); // Gère les problèmes de CORS (optionnel)
const app = express();
const port = 3000;

// Middleware pour gérer les fichiers statiques dans "public"
app.use(express.static(path.join(__dirname, 'public')));

// (Optionnel) Activer CORS
app.use(cors());

// API pour exécuter ton script Node.js
app.get('/api/exec', (req, res) => {
    try {
        let result = "Hello from Node.js!";
        res.json({ message: result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
