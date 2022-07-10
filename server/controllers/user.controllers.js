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

export const loginUser = async (req, res) => {
    const { email, password } = req.body.data;
    try {
        const user = await User.findByCredentials(email, password);
        if (!user) throw Error("User not found");
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token });
    } catch (err) {
        res.status(404).send(err.message);
    }
};

export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(
            ({ token }) => token !== req.token
        );
        await req.user.save();
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const getUserDetails = async (req, res) => {
    console.log(req.user);
    try {
        res.status(200).send(req.user);
    } catch (err) {
        res.status(404).send(err.message);
    }
};
