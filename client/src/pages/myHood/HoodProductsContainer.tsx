import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import Product from "../../context/productContext/Product.types";
import { v4 as uuid } from "uuid";
import { StyledHoodProductsWrapper } from "./styles/StyledHoodProductsWrapper";

const HoodProductsContainer = () => {
    const { myHood } = useHood();

    console.log(myHood);

    const renderHoodProducts = () => {
        return myHood?.availableProducts.map((product) => {
            const uniqueId = uuid();
            return (
                <ProductCard
                    shouldShowContextMenu={false}
                    isMyFridge={false}
                    product={product as Product}
                    key={typeof product !== "string" ? product._id : uniqueId}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledHoodProductsWrapper>
            {renderHoodProducts()}
        </StyledHoodProductsWrapper>
    );
};

export default HoodProductsContainer;
