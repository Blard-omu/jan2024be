import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/product.js';


const router = express.Router();


// product routes
router.post('/create', createProduct)
router.get('/all', getAllProducts)
router.get('/:productId', getSingleProduct)
router.put('/update/:productId', updateProduct)
router.delete('/:productId', deleteProduct)


export default router; 