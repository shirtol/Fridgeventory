import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import { StyledHoodProductsWrapper } from "./styles/StyledHoodProductsWrapper";

const HoodProductsContainer = () => {
    const { myHood } = useHood();

    console.log(myHood);

    const renderHoodProducts = () => {
        return myHood?.availableProducts?.map((product) => {
            return (
                <ProductCard
                    shouldShowContextMenu={false}
                    isMyFridge={false}
                    product={product}
                    key={product._id}
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
