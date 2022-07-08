import mongoose from "mongoose";
import validator from "validator";

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("Please enter a valid email");
            }
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw Error(
                    "Your password must be at least 8 chars and must contain at least 1 lowercase letter, 1 uppercase letter, 1 number and one symbol"
                );
            }
        },
        // validate(value) {
        //     if (value.length < 8) {
        //         throw Error("Password length must be at least 8 characters");
        //     }
        // },
    },
    location: {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});
