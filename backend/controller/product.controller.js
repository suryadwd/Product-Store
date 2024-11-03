import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not fetch products" });
    }
};

export const createProducts = async (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const newProduct = new Product({ name, price, image });
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteProducts = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateProducts = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
};


//product.controller.js