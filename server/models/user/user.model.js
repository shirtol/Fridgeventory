import { userSchema } from "./user.schema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

//Function on instance
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign(
        { _id: user._id.toString() },
        process.env.JWT_TOKEN_SECRET
    );

    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
};

//Function on model
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw Error("Username or password is incorrect");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw Error("Username or password is incorrect");
    }

    return user;
};

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

export const User = mongoose.model("user", userSchema);
