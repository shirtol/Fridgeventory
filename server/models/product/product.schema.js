import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: Date,
        // required: true,
    },
    amount: {
        type: Number,
        default: 1,
    },
    productImage: {
        type: String,
    },
    category: {
        type: String,
    },
    owner: {
        type: String,
    },
    isShared: Boolean,
});
