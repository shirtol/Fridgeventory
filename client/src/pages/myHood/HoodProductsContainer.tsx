import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import ProductCard from "../../components/productCard/ProductCard";

const HoodProductsContainer = () => {
    const renderHoodProducts = () => {};

    return (
        <StyledFlexWrapper width="70%">
            <ProductCard
                product={{
                    name: "Milk",
                    amount: 3,
                    productImage:
                        "https://fridgeventory.s3.eu-central-1.amazonaws.com/WQO50_Z_P_7290114310949_1.webp",
                    expiryDate: new Date(),
                    category: "Diary",
                    _id: "123",
                }}
            ></ProductCard>
            {/* {renderHoodProducts()} */}
        </StyledFlexWrapper>
    );
};

export default HoodProductsContainer;
