import Product from "../models/product.js";


export const createProduct = async (req, res) => {
    try {
        const { title, description, price, quantity } = req.body;
        // console.log(req.body);

        // Validate input fields
        if(!title || !description || !price){
            return res.status(400).json({success: false, message: "Enter all required fields"})
        }

        const product = new Product({title, description, price, quantity})

        // Save product
        await product.save()

        // Success Response
        res.status(200).json({success: true, message: "product created successfully", data: product})
    } catch (err) {
        console.log("Error creating Product", err);
        
    }
}


// getAllProducts
export const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find()

        if(!products){
            return res.status(404).json({success: false, message: "Products not found"})
        }
        res.status(200).json({success: true, message: "products fetched successfully", products})
        
    } catch (err) {
        console.log("Error getting all products", err);
        
    }
}

// updateProduct
export const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const { title, description, price, quantity } = req.body

        // find Product by productId
        const product = await Product.findById({_id: productId})

        if(!product){
            return res.status(404).json({success: false, message: "Product not found"})
        }

        // update product
        product.title = title || product.title
        product.description = description || product.description
        product.price = price || product.price
        product.quantity = quantity || product.quantity

        // save updated product
        const updatedProduct = await product.save()

        res.status(200).json({success: true, message: "product update successfully", data: updatedProduct})

    } catch (err) {
        
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params

        // find Product by productId
        const product = await Product.findByIdAndDelete({_id: productId})

        if(!product){
            return res.status(404).json({success: false, message: "Product not found"})
        }

        res.status(200).json({success: true, message: `Product ${productId} deleted successfully`})

    } catch (err) {
        
    }
}


// getSingleProduct
export const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params

        // find Product by productId
        const product = await Product.findById({_id: productId})

        if(!product){
            return res.status(404).json({success: false, message: "Product not found"})
        }

        res.status(200).json({success: true, message: `Product fetched successfully`, data: product})

    } catch (err) {
        
    }
}

