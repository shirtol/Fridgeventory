import React from "react";
import HoodFeed from "../../components/hoodFeed/HoodFeed";
import ShoppingListHome from "../../components/shoppingListHome/ShoppingListHome";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";

const Home = () => {
    return (
        <StyledMainWrapper>
            <StyledFlexWrapper>
                <ShoppingListHome></ShoppingListHome>
                <StyledFlexWrapper>
                    <HoodFeed></HoodFeed>
                    <ProductsCarousel></ProductsCarousel>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </StyledMainWrapper>
    );
};

export default Home;
