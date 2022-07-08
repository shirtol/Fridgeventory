import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { productsApi } from "../../apis/fridgeventoryApi";
import Product from "../../utils/products/types";

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

    const fetchProducts = async () => {
        const result = await productsApi.get("/getAllProducts");
        setAllProducts(result.data);
        console.log(result);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const value: ProductContextValue = { allProducts, setAllProducts };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
