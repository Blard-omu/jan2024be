import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
    },
    // Add more
}, {timestamps: true})

export default mongoose.model("User", userSchema)