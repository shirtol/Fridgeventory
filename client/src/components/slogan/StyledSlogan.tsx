import styled from "styled-components";
import device from "../../utils/stylesUtils/mediaQuerySizes";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
// import GraphikMedium from "../../assets/fonts/GraphikMedium.otf";

export const StyledSlogan = styled.div`
    font-family: "hussar";
    font-size: 4rem;
    top: 50%;
    left: 10rem;
    letter-spacing: 3px;
    z-index: 210;
    color: ${Colors.headerBlue};
    text-align: center;
    cursor: pointer;
    @media ${device.tablet} {
        font-size: 2.5rem;
    }
    @media ${device.mobileL} {
        font-size: 1.8rem;
    }
    @media ${device.mobileS} {
        font-size: 1.5rem;
    }
`;
