import React from "react";
import { StyledTitle } from "./styles/StyledTitle";

interface TitleProps {
    titleText: string;
    titleFontSize?: string;
    titleWidth?: string;
}

const Title = ({ titleText, titleFontSize, titleWidth }: TitleProps) => {
    return (
        <StyledTitle fontSize={titleFontSize} width={titleWidth}>
            {titleText}
        </StyledTitle>
    );
};

export default Title;
