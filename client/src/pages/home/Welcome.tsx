import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
import { StyledWelcomeMsg } from "./styles/StyledWelcomeMsg";

const Welcome = () => {
    return (
        <StyledFlexWrapper
            flexDirection="column"
            alignItems="flex-start"
            alignSelf="flex-start"
        >
            <StyledWelcomeMsg fontSize="4rem">
                Welcome To Fridgeventory!
            </StyledWelcomeMsg>
            <StyledWelcomeMsg fontSize="2rem">
                Making decrease food waste a priority.
            </StyledWelcomeMsg>
            <StyledWelcomeMsg fontSize="1.7rem">
                Fridgeventory created with the vision to decrease food waste in
                the world. By connecting with your hood you can share your own
                products and
            </StyledWelcomeMsg>
        </StyledFlexWrapper>
    );
};

export default Welcome;
