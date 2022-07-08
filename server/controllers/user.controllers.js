import { User } from "../models/user/user.model.js";

export const registerUser = async (req, res) => {
    console.log(req.body.data);
    try {
        const user = new User(req.body.data);
        await user.save();
        const token = await user.generateAuthToken();
        console.log(token);
        res.status(201).send({ user, token });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
};

export const loginUser = () => {};
