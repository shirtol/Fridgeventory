import { Product } from "../models/product/product.model.js";
import FridgeventoryError from "../utils/errorHandling.js";

export const fetchAllProducts = async (userId) => {
    const allProducts = await Product.find({ owner: userId });
    return allProducts;
};

export const fetchProductAndDelete = async (productId, userId) => {
    try {
        const product = await Product.findById({ _id: productId });
        if (!product) {
            throw new FridgeventoryError(404, "Product NOT Found");
        }
        if (product.owner !== userId) {
            throw new FridgeventoryError(403, "Access Denied!");
        }
        await product.delete();
        return product;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            productId,
            userId,
        });
    }
};

export const updateProductAfterSharing = async (productId) => {
    try {
        const product = await Product.findOneAndUpdate(
            { _id: productId },
            { isShared: true },
            { new: true }
        );
        return product;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
        });
    }
};

export const editProductById = async (product) => {
    try {
        const productAfterEdit = await Product.findOneAndUpdate(
            { _id: product._id },
            { ...product },
            { new: true }
        );
        return productAfterEdit;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
        });
    }
};
