const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Variável para o estado do ar-condicionado
let acState = false;

app.use(express.json());

// Endpoint para ligar o ar-condicionado
app.post('/ac/on', (req, res) => {
    acState = true;
    console.log("Ar-condicionado ligado");
    res.send('Ar-condicionado ligado');
});

// Endpoint para desligar o ar-condicionado
app.post('/ac/off', (req, res) => {
    acState = false;
    console.log("Ar-condicionado desligado");
    res.send('Ar-condicionado desligado');
});

// Endpoint para verificar o estado atual do ar-condicionado
app.get('/ac/state', (req, res) => {
    res.json({ state: acState });
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
