import React from "react";
import { useHistory } from "react-router-dom";
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
        </StyledBannerWrapper>
    );
};

export default WebsiteBanner;
