import mongoose from "mongoose";

export const hoodSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    people: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    ],
    description: String,
    image: String,
    availableProducts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
    ],
});
