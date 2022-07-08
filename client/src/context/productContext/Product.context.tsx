import React, { useContext } from "react";
import { ReactNode } from "react";

interface ProductContextValue {}

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = React.createContext<ProductContextValue>({});

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const value: ProductContextValue = {};

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
