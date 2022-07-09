import { Hood } from "../models/hood/hood.model.js";

export const fetchAllHoods = async () => {
    const allHoods = await Hood.find();
    return allHoods;
};

export const fetchHood = async (hoodId, userId) => {
    try {
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            productId,
            userId,
        });
    }
};
