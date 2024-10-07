// server.ts
import express from 'express';

const app = express();
const PORT = 3000;

// Adicione a rota de redirecionamento
app.get('/listads/:product_id', (req, res) => {
  const product_id = req.params.product_id;
  res.redirect(`mercadotech://listads/${product_id}`);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
