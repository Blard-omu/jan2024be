import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    // Add more
}, {timestamps: true})

export default mongoose.model("Product", productSchema)