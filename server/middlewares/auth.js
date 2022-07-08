import { User } from "../models/user/user.model.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });
        if (!user) {
            throw Error("User doesn't exist");
        }
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send({ error: "Please Authenticate" });
    }
};
