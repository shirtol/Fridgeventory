import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { productsApi } from "../../apis/fridgeventoryApi";
import Product from "../../utils/products/types";
import { useUser } from "../userContext/User.context";

interface ProductContextValue {
    allProducts: Product[];
    setAllProducts: (products: Product[]) => void;
}

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = React.createContext<Partial<ProductContextValue>>({});

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const { token } = useUser();

    const fetchProducts = async () => {
        const { data } = await productsApi.get("/getAllProducts", {
            headers: {
                Authorization: token!,
            },
        });
        setAllProducts(data);
    };

    useEffect(() => {
        if (token) {
            fetchProducts();
        }
    }, [token]);

    const value: ProductContextValue = { allProducts, setAllProducts };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
