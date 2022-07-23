import React from "react";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../layouts/StyledMainWrapper";
import { StyledNotLoggedInMessage } from "./styles/StyledNotLoggedInMessage";
import Lottie from "lottie-react";
import "./styles/lottieLoginStyles.css";

import pleaseLogin from "../../assets/animations/pleaseLogin.json";
import { useTranslation } from "../../context/translation/Translation.context";

const NotLoggedInPage = () => {
    const { t } = useTranslation();

    return (
        <StyledMainWrapper alignItems="center">
            <StyledFlexWrapper flexDirection="column" height="80vh">
                <Lottie
                    className="lottie-login"
                    animationData={pleaseLogin}
                    loop={false}
                ></Lottie>
                <StyledNotLoggedInMessage>
                    {t("fridge.notLoggedIn")}
                </StyledNotLoggedInMessage>
            </StyledFlexWrapper>
        </StyledMainWrapper>
    );
};

export default NotLoggedInPage;
