import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { productsApi } from "../../apis/fridgeventoryApi";
import Product, { parseProduct } from "./Product.types";
import { useUser } from "../userContext/User.context";

interface ProductContextValue {
    allProducts: Product[];
    setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    updateProduct: (product: Product) => void;
}

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = React.createContext<Partial<ProductContextValue>>({});

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const { token, currUser } = useUser();

    const fetchProducts = async () => {
        const { data } = await productsApi.get("/getAllProducts", {
            headers: {
                Authorization: token!,
            },
        });
        const products: Product[] = data.map(parseProduct);

        setAllProducts(products);
    };

    const updateProduct = (product: Product) => {
        const newProductsArr = allProducts.map((currProducts) => {
            if (currProducts._id === product._id) {
                return product;
            }
            return currProducts;
        });
        setAllProducts(newProductsArr);
    };

    useEffect(() => {
        if (currUser) {
            fetchProducts();
        } else {
            setAllProducts([]);
        }
    }, [currUser, token]);

    const value: ProductContextValue = {
        allProducts,
        setAllProducts,
        updateProduct,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
