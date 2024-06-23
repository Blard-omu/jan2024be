import express from 'express';
import { myControllerFunction, getAllProducts, getOneProduct } from '../controllers/auth.js';

const router = express.Router();





// Routes
router.get("/", myControllerFunction);
router.get("/products/all", getAllProducts);
// router.get("/product/:productId", getOneProduct); // productId



export default router

