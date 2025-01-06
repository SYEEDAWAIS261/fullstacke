import { Router } from 'express';
import { getAllProducts, createProduct, deleteProduct } from '../controllers/ProductController.js';

const router = Router();

// Get all products
router.post('/allpro', getAllProducts);

// Create a new product
router.post('/createpro', createProduct);

// Delete a product by ID
router.post('/delete:id', deleteProduct);

export default router;
