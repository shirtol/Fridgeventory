import { Product } from "../models/product/product.model.js";

export const fetchAllProducts = async (userId) => {
    const allProducts = await Product.find({ owner: userId });
    return allProducts;
};
