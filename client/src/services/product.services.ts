import { productsApi } from "../apis/fridgeventoryApi";

export const deleteProductById = async (productId: string, token: string) => {
    const { data } = await productsApi.delete(`/deleteProduct/${productId}`, {
        headers: {
            Authorization: token!,
        },
    });
    console.log(data);
    return data;
};
