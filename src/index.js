import express from "express";
import productRoutes from './routes/productRoutes.js';
import customerRoutes from './routes/customerRoutes.js';

const app = express();
app.use(express.json());

// app.use(productRoutes);

app.use(customerRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});