import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
import { StyledFilterIcon } from "../fridge/styles/StyledFilterIcon";
import { StyledWelcomeMsg } from "./styles/StyledWelcomeMsg";

const Welcome = () => {
    return (
        <>
            <StyledFlexWrapper
                flexDirection="column"
                alignItems="flex-start"
                alignSelf="flex-start"
                alignItemsTablet="center"
            >
                <StyledWelcomeMsg
                    fontSize="4rem"
                    fontSizeTablet="3rem"
                    color="#646FD4"
                >
                    Welcome To Fridgeventory!
                </StyledWelcomeMsg>
                <StyledWelcomeMsg
                    fontSize="2rem"
                    fontSizeTablet="1.6rem"
                    color="#92A0D4"
                >
                    Making decreased food waste a priority.
                </StyledWelcomeMsg>
                <StyledWelcomeMsg fontSize="1.7rem" fontSizeTablet="1.4rem">
                    Fridgeventory was created with a vision, to decrease food
                    waste one person at a time. Keep track of your expired
                    products, and share products with your hood before they
                    expire.
                </StyledWelcomeMsg>
            </StyledFlexWrapper>
        </>
    );
};

export default Welcome;
