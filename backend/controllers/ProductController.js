// import Product from '../models/ProductModel.js';
import Product from "../models/ProductModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
export const createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const newProduct = new Product({ name, description, price });
        await newProduct.save();

        // Send success message and the newly created product
        return res.status(201).json({
            message: 'Product created successfully',
            product: newProduct
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};




// Delete a product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
