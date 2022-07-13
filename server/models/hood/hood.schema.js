import mongoose from "mongoose";

export const hoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    peopleIdsArr: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
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
