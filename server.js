const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Autoriser toutes les origines
app.use(cors());

app.get('/api/exec', (req, res) => {
    let result = "Hello from Node.js!";
    res.json({ message: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
