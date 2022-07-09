import React from "react";
import Product from "../../utils/products/types";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledCard } from "./styles/StyledCard";
import { StyledCardTitle } from "./styles/StyledCardTitle";
import { StyledCategory } from "./styles/StyledCategory";
import { StyledExpireMsg } from "./styles/StyledExpireMsg";
import { StyledImageBox } from "./styles/StyledImageBox";
import { StyledProductAmount } from "./styles/StyledProductAmount";
import { StyledProductImg } from "./styles/StyledProductImg";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <StyledCard>
            <StyledCardTitle>{product.name}</StyledCardTitle>
            <StyledCategory>{product.category}</StyledCategory>
            <StyledImageBox>
                <StyledProductImg src={product.productImage}></StyledProductImg>
            </StyledImageBox>
            <StyledProductAmount>{product.amount}</StyledProductAmount>
            <StyledExpireMsg>{`Expires in: ${product.expiryDate}`}</StyledExpireMsg>
        </StyledCard>
    );
};

export default ProductCard;
