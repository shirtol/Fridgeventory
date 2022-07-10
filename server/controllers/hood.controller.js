import {
    addUserToHood,
    createNewHood,
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
        const hood = await fetchUserHood(
            req.params.hoodId,
            req.user._id.valueOf()
        );
        return res.status(200).send(hood);
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const joinHood = async (req, res) => {
    try {
        const joinedHood = await addUserToHood(
            req.params.hoodId,
            req.user._id.valueOf()
        );
        return res.status(200).send(joinedHood);
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const createHood = async (req, res) => {
    console.log(req.body);
    try {
        const newHood = await createNewHood(req.body, req.user._id.valueOf());
        return res.status(200).send(newHood);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};
