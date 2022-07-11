import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import Product from "../../context/productContext/Product.types";
import { v4 as uuid } from "uuid";

const HoodProductsContainer = () => {
    const { myHood } = useHood();

    console.log(myHood);

    const renderHoodProducts = () => {
        return myHood?.availableProducts.map((product) => {
            const uniqueId = uuid();
            return (
                <ProductCard
                    product={product as Product}
                    key={typeof product !== "string" ? product._id : uniqueId}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledFlexWrapper width="70%">
            {renderHoodProducts()}
        </StyledFlexWrapper>
    );
};

export default HoodProductsContainer;
