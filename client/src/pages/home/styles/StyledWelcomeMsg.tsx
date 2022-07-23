import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

interface StyledWelcomeMsgProps {
    fontSize: string;
    color: string;
    fontSizeTablet: string;
}

export const StyledWelcomeMsg = styled.h3<Partial<StyledWelcomeMsgProps>>`
    font-size: ${(props) => props.fontSize ?? "1.5rem"};
    color: ${(props) => props.color ?? Colors.blackText};
    line-height: 4rem;
    letter-spacing: 0.6px;
    unicode-bidi: plaintext;
    text-align: center;
    @media ${device.tablet} {
        text-align: center;
        padding: 0 1rem;
        font-size: ${(props) => props.fontSizeTablet ?? "1.5rem"};
        line-height: 3rem;
    }
    @media ${device.mobileM} {
        line-height: 2.5rem;
    }
`;
