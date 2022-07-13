import {
    joinHood,
    fetchAllHoods,
    fetchUserHood,
} from "../services/hood.services.js";

export const getAllHoods = async (req, res) => {
    try {
        const allHoods = await fetchAllHoods();
        res.status(200).send(allHoods);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};

export const getHoodById = async (req, res) => {
    try {
        const data = await fetchUserHood(
            req.params.hoodId,
            req.user._id.valueOf()
        );
        console.log(data);
        return res.status(200).send(data);
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const joinToHood = async (req, res) => {
    try {
        const data = await joinHood(req.body, req.user._id.valueOf());
        return res.status(200).send(data);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};
