import { User } from "../models/user/user.model.js";

export const registerUser = async (req, res) => {
    try {
        const user = new User(req.body.data);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (err) {
        res.status(400).send(JSON.stringify({ message: err.message }));
    }
};

export const loginUser = () => {};
