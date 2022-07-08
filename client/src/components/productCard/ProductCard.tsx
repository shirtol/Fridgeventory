import React from "react";
import Product from "../../utils/products/types";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledCardTitle } from "./styles/StyledCardTitle";
import { StyledCategory } from "./styles/StyledCategory";
import { StyledExpireMsg } from "./styles/StyledExpireMsg";
import { StyledProductAmount } from "./styles/StyledProductAmount";
import { StyledProductImg } from "./styles/StyledProductImg";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <StyledFlexWrapper flexDirection="column">
            <StyledCardTitle>{product.name}</StyledCardTitle>
            <StyledCategory>{`Category: ${product.category}`}</StyledCategory>
            <StyledProductImg src={product.productImage}></StyledProductImg>
            <StyledProductAmount>{product.amount}</StyledProductAmount>
            <StyledExpireMsg>{`Expires in: ${product.expiryDate}`}</StyledExpireMsg>
        </StyledFlexWrapper>
    );
};

export default ProductCard;
