import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

interface StyledTitleProps {
    fontSize?: string;
    width?: string;
    fontSizeLaptopL?: string;
}

export const StyledTitle = styled.h3<StyledTitleProps>`
    font-size: ${(props) => props.fontSize ?? "1.3rem"};
    text-align: center;
    width: ${(props) => props.width ?? "auto"};
    @media ${device.laptopL} {
        font-size: ${(props) =>
            props.fontSizeLaptopL ?? props.fontSize ?? "1.3rem"};
    }
`;
