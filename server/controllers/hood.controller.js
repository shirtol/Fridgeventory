import { fetchAllHoods, fetchHood } from "../services/hood.services.js";

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
        const hood = await fetchHood(req.params.hoodId, req.user._id.valueOf());
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const joinHood = async (req, res) => {};
