import { Router } from "express";
import { getProducts, createProductController, getProduct } from  '../controllers/productController.js';

const router = Router();

router.get("/products", getProducts);

router.post("/products", createProductController);

router.get("/products/:id", getProduct);

export default router;