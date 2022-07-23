import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { useTranslation } from "../../context/translation/Translation.context";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
import { StyledFilterIcon } from "../fridge/styles/StyledFilterIcon";
import { StyledWelcomeMsg } from "./styles/StyledWelcomeMsg";

const Welcome = () => {
    const { t } = useTranslation();

    return (
        <>
            <StyledFlexWrapper flexDirection="column" alignItemsTablet="center">
                <StyledWelcomeMsg
                    fontSize="4rem"
                    fontSizeTablet="3rem"
                    color="#646FD4"
                >
                    {t("welcome.title")}
                </StyledWelcomeMsg>
                <StyledWelcomeMsg
                    fontSize="2rem"
                    fontSizeTablet="1.6rem"
                    color="#92A0D4"
                >
                    {t("welcome.subtitle")}
                </StyledWelcomeMsg>
                <StyledWelcomeMsg fontSize="1.7rem" fontSizeTablet="1.4rem">
                    {t("welcome.description")}
                </StyledWelcomeMsg>
            </StyledFlexWrapper>
        </>
    );
};

export default Welcome;
