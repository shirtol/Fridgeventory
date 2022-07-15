import React from "react";
import { useHistory } from "react-router-dom";
import { logoImages } from "../../utils/stylesUtils/images";
import { StyledLogo } from "../logo/StyledLogo";
import { StyledSlogan } from "../slogan/StyledSlogan";
import { StyledBannerWrapper } from "./styles/StyledBannerWrapper";

const WebsiteBanner = () => {
    const history = useHistory();

    const onSlogenClicked = () => {
        history.push("/");
    };

    return (
        <StyledBannerWrapper>
            <StyledSlogan onClick={onSlogenClicked}>FRIDGEVENTORY</StyledSlogan>
            <StyledLogo src={logoImages.logo}></StyledLogo>
        </StyledBannerWrapper>
    );
};

export default WebsiteBanner;
