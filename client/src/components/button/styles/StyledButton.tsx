import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

interface StyledButtonProps {
    fontSize?: string;
    disabled?: boolean;
    position?: string;
}

export const StyledButton = styled.div<StyledButtonProps>`
    padding: 0.8rem 2.8rem;
    font-size: ${(props) => props.fontSize ?? "2rem"};
    position: ${(props) => props.position ?? "static"};
    bottom: 2rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    border-radius: 4px;
    background-color: ${(props) =>
        props.disabled ? Colors.greyIcon : Colors.whiteSmoke};
    box-shadow: ${Shadows.buttonBoxShadow};
    color: ${(props) => (props.disabled ? Colors.whiteSmoke : Colors.orange)};
    width: max-content;
    height: max-content;
    cursor: pointer;
    &:active {
        transition: box-shadow 100ms ease-in-out;
        transform: scale(0.95);
        transition: transform 100ms ease-in-out;
        box-shadow: ${Shadows.buttonActiveBoxShadow};
    }
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    @media ${device.tablet} {
        padding: 0.6rem 2.4rem;
        font-size: 1.5rem;
    }
    @media ${device.mobileM} {
        padding: 0.4rem 2rem;
        font-size: 1.2rem;
    }
`;
