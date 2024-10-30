const express = require('express');
const app = express();
let status = false;  // Estado inicial do ar-condicionado

app.use(express.json());

// Endpoint para obter o status
app.get('/api/status', (req, res) => {
  res.send(status ? "true" : "false");
});

// Endpoint para atualizar o status
app.post('/api/status', (req, res) => {
  status = req.body.status;
  res.send({ success: true, status });
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});



console.log("KKKK")