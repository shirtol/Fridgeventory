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
        console.error(err);
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
            productId,
            userId,
        });
    }
};

export const updateProductIsShared = async (productId, isShared) => {
    try {
        const product = await Product.findOneAndUpdate(
            { _id: productId },
            { isShared: isShared },
            { new: true }
        );
        return product;
    } catch (err) {
        console.error(err);
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
        });
    }
};

export const editProductById = async (product, productId) => {
    try {
        const editedProduct = new Product(product);
        let newProduct = editedProduct.toObject();
        console.log(newProduct);
        delete newProduct._id;

        const productAfterEdit = await Product.findOneAndUpdate(
            { _id: productId },
            newProduct,
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        return productAfterEdit;
    } catch (err) {
        throw new FridgeventoryError(500, {
            message: "Something went wrong",
        });
    }
};

export const getProductById = async (productId) => {
    return await Product.findById({ _id: productId });
};
