import React from "react";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledCardTitle } from "./styles/StyledCardTitle";
import { StyledExpireMsg } from "./styles/StyledExpireMsg";
import { StyledProductAmount } from "./styles/StyledProductAmount";
import { StyledProductImg } from "./styles/StyledProductImg";

interface ProductCardProps {
    productName: string;
    productImgSrc: string;
    productAmount: number;
    productExpiry: string;
}

const ProductCard = ({
    productName,
    productImgSrc,
    productAmount,
    productExpiry,
}: ProductCardProps) => {
    return (
        <StyledFlexWrapper>
            <StyledCardTitle>{productName}</StyledCardTitle>
            <StyledProductImg src={productImgSrc}></StyledProductImg>
            <StyledProductAmount>{productAmount}</StyledProductAmount>
            <StyledExpireMsg>Expires in: {productExpiry}</StyledExpireMsg>
        </StyledFlexWrapper>
    );
};

export default ProductCard;
