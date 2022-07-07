import { Product } from "../models/product/product.model.js";

export const fetchAllProducts = async () => {
    const allProducts = await Product.find();
    return allProducts;
};
