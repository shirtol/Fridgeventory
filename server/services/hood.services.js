import { Hood } from "../models/hood/hood.model.js";
import FridgeventoryError from "../utils/errorHandling.js";
import { User } from "../models/user/user.model.js";

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
        if (!hood.people.find((user) => user._id.toString() === userId)) {
            throw new FridgeventoryError(403, "Access Denied!");
        }
        return await populateHood(hood);
    } catch (err) {
        console.log(err);
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            hoodId,
            userId,
        });
    }
};

const populateHood = async (hood) => {
    let populatedHood = await hood.populate("people");
    populatedHood = await populatedHood.populate("availableProducts");
    populatedHood.availableProducts = populatedHood.availableProducts.filter(
        (product) => product !== null
    );
    populatedHood.save();
    return populatedHood;
};

export const joinHood = async (newHood, userId) => {
    try {
        const hood = await Hood.findOneAndUpdate(
            { location: newHood.location },
            { $addToSet: { people: userId }, location: newHood.location },
            { new: true, upsert: true }
        );
        await User.findOneAndUpdate(
            { _id: userId },
            { $push: { hoods: hood._id } },
            { new: true }
        );
        return await populateHood(hood);
    } catch (err) {
        console.error(err);
        throw new FridgeventoryError(500, "Cannot create hood");
    }
};

export const addProductToHood = async (productObjectId, hoodId, userId) => {
    try {
        const hood = await Hood.findOneAndUpdate(
            { _id: hoodId },
            { $push: { availableProducts: productObjectId } },
            { new: true, upsert: true }
        );
        return hood;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            hoodId,
            userId,
        });
    }
};
