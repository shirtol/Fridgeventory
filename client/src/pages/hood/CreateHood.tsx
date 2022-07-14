import React from "react";
import Button from "../../components/button/Button";
import { StyledHoodNotFound } from "../../components/hoodNotFound/StyledHoodNotFound";
import { StyledTitle } from "../../components/title/styles/StyledTitle";
import Title from "../../components/title/Title";
import { iconsImages } from "../../utils/stylesUtils/images";
import { StyledCreateHoodWrapper } from "./styles/StyledCreateHoodWrapper";

const CreateHood = () => {
    return (
        <StyledCreateHoodWrapper>
            <Title
                titleText="We didn't find your hood!"
                titleFontSize="3rem"
                titleWidth="40rem"
            ></Title>
            <StyledHoodNotFound src={iconsImages.sadFrog}></StyledHoodNotFound>
            <Title
                titleText="Search for your hood, click on the full address and be the first one to join"
                titleFontSize="2rem"
                titleWidth="50rem"
            ></Title>
        </StyledCreateHoodWrapper>
    );
};

export default CreateHood;
