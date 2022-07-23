import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "../../context/translation/Translation.context";
import { logoImages } from "../../utils/stylesUtils/images";
import { StyledLogo } from "../logo/StyledLogo";
import { StyledSlogan } from "../slogan/StyledSlogan";
import { StyledBannerWrapper } from "./styles/StyledBannerWrapper";

const WebsiteBanner = () => {
    const history = useHistory();
    const { setChosenTranslation } = useTranslation();

    const onSlogenClicked = () => {
        history.push("/");
    };

    const changeSelectedLang = (id: string) => {
        setChosenTranslation!(id);
    };

    return (
        <StyledBannerWrapper>
            <StyledSlogan onClick={onSlogenClicked}>FRIDGEVENTORY</StyledSlogan>
            <StyledLogo src={logoImages.logo}></StyledLogo>
            <h3 onClick={() => changeSelectedLang("en")}>English</h3>
            <h3 onClick={() => changeSelectedLang("he")}>Hebrew</h3>
        </StyledBannerWrapper>
    );
};

export default WebsiteBanner;
