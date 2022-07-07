import React from "react";
import { StyledTitle } from "./styles/StyledTitle";

interface TitleProps {
    titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
    return <StyledTitle>{titleText}</StyledTitle>;
};

export default Title;
