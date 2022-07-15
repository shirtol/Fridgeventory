import React from "react";
import { StyledTitle } from "./styles/StyledTitle";

interface TitleProps {
    titleText: string;
    titleFontSize?: string;
    titleWidth?: string;
    TitleFontSizeLaptopL?: string;
}

const Title = ({
    titleText,
    titleFontSize,
    titleWidth,
    TitleFontSizeLaptopL,
}: TitleProps) => {
    return (
        <StyledTitle
            fontSize={titleFontSize}
            width={titleWidth}
            fontSizeLaptopL={TitleFontSizeLaptopL}
        >
            {titleText}
        </StyledTitle>
    );
};

export default Title;
