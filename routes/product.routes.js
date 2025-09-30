import express from 'express'
const router = express.Router();
import  {createProduct, getAllProducts, getProductById, deleteProduct, updateProduct} from '../controllers/product.controller.js';
import { validateProduct, handleValidationErrors } from '../middleware/validation.middleware.js';

// Create a new product
router.post('/', validateProduct, handleValidationErrors, createProduct);

// Get all products
router.get('/', getAllProducts);

// Get a single product
router.get('/:id', getProductById);

// Update a product
router.put('/:id', validateProduct, handleValidationErrors, updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

export default router;
