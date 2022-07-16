import { productsApi } from "../apis/fridgeventoryApi";
import Product from "../context/productContext/Product.types";

export const deleteProductById = async (productId: string, token: string) => {
    const { data } = await productsApi.delete(`/deleteProduct/${productId}`, {
        headers: {
            Authorization: token!,
        },
    });
    return data;
};

export const getProductById = async (productId: string, token: string) => {
    const { data } = await productsApi.get(`/getSpecificProduct/${productId}`, {
        headers: {
            Authorization: token!,
        },
    });
    return data;
};

export const editProductById = async (
    product: Object,
    productId: string,
    token: string
) => {
    try {
        const { data } = await productsApi.put(
            `/editProduct/${productId}`,
            product,
            {
                headers: {
                    Authorization: token,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const shareProductToHood = async (
    hoodId: string,
    token: string,
    productId: string
) => {
    const { data } = await productsApi.put(
        `/shareProduct/${hoodId}`,
        {
            productId: productId,
        },
        {
            headers: {
                Authorization: token!,
            },
        }
    );
    return {
        hoodAfterUpdating: data.hoodAfterUpdating,
        productAfterUpdating: data.productAfterUpdating,
    };
};

export const unShareProductToHood = async (
    hoodId: string,
    token: string,
    productId: string
) => {
    const { data } = await productsApi.put(
        `/unshareProduct/${hoodId}`,
        {
            productId: productId,
        },
        {
            headers: {
                Authorization: token!,
            },
        }
    );
    return {
        hoodAfterUpdating: data.hoodAfterUpdating,
        productAfterUpdating: data.productAfterUpdating,
    };
};
