import { Hood } from "../models/hood/hood.model.js";
import FridgeventoryError from "../utils/errorHandling.js";
import { User } from "../models/user/user.model.js";

export const fetchAllHoods = async () => {
    const allHoods = await Hood.find();
    return allHoods;
};

const getAllUsersInHood = async (hood) => {
    const usersInHood = [];
    for (const personId of hood.peopleIdsArr) {
        const user = await User.findById({ _id: personId });
        usersInHood.push(user);
    }
    return usersInHood;
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
        let populatedHood = await hood.populate("peopleIdsArr");
        populatedHood = await populatedHood.populate("availableProducts");

        return populatedHood;
    } catch (err) {
        console.log(err);
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            hoodId,
            userId,
        });
    }
};

export const joinHood = async (newHood, userId) => {
    try {
        const hood = await Hood.findOneAndUpdate(
            { location: newHood.location },
            { $addToSet: { peopleIdsArr: userId }, location: newHood.location },
            { new: true, upsert: true }
        );
        const usersInHood = await getAllUsersInHood(hood);
        await User.findOneAndUpdate(
            { _id: userId },
            { $push: { hoods: hood._id } },
            { new: true }
        );
        return { hood, usersInHood };
    } catch (err) {
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

// export const deleteProductFromHood = async (productId, userId, hoodId) => {
//     try {
//         const hood = await Hood.findById({_id: productId});
//         if (!hood) {
//             throw new FridgeventoryError(404, "Hood NOT Found");
//         };
//         if(hood.peopleIdsArr)

//     } catch (err) {
//         throw new FridgeventoryError(500, {
//             message: "Something went wrong",
//             productId,
//             userId,
//         });
//     }

// }
