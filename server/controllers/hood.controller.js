import { fetchAllHoods } from "../services/hood.services.js";

export const getAllHoods = async (req, res) => {
    try {
        const allHoods = await fetchAllHoods();
        res.status(200).send(allHoods);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};
