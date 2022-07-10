import { Hood } from "../models/hood/hood.model.js";
import FridgeventoryError from "../utils/errorHandling.js";

export const fetchAllHoods = async () => {
    const allHoods = await Hood.find();
    return allHoods;
};

export const fetchUserHood = async (hoodId, userId) => {
    try {
        const hood = await Hood.findById({ _id: hoodId });
        if (!hood) {
            throw new FridgeventoryError(404, "Hood NOT Found");
        }
        if (!hood.peopleIdsArr.includes(userId)) {
            throw new FridgeventoryError(403, "Access Denied!");
        }
        return hood;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            hoodId,
            userId,
        });
    }
};

export const addUserToHood = async (hoodId, userId) => {
    try {
        const hood = await Hood.findById({ _id: hoodId });
        if (!hood) {
            throw new FridgeventoryError(404, "Hood NOT Found");
        }
        if (hood.peopleIdsArr.includes(userId)) {
            throw new FridgeventoryError(
                403,
                "User already exist in this hood"
            );
        }
        hood.peopleIdsArr.push(userId);
        await hood.save();
        return hood;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            hoodId,
            userId,
        });
    }
};

export const createNewHood = async (newHood, userId) => {
    console.log(newHood);
    try {
        const hood = await Hood.findOneAndUpdate(
            { location: newHood.location },
            { $push: { peopleIdsArr: userId }, location: newHood.location },
            { new: true, upsert: true }
        );
        // const hood = new Hood({
        //     name: newHood.name,
        //     location: newHood.location,
        //     peopleIdsArr: [userId],
        // });
        // const result = await hood.save();
        return hood;
    } catch (err) {
        throw new FridgeventoryError(500, "Cannot create hood");
    }
};
