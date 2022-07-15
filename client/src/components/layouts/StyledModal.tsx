import styled from "styled-components";
import device from "../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../utils/stylesUtils/stylesConsts";

interface StyledModalProps {
    height?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
}

export const StyledModal = styled.div<StyledModalProps>`
    width: ${(props) => props.width ?? "40%"};
    height: ${(props) => props.height ?? "65%"};
    background-color: ${Colors.whiteSmoke};
    background-image: ${Colors.modalBg};
    opacity: 0.9;
    border-radius: 8px;
    box-shadow: ${Shadows.modalBoxShadow};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems ?? "center"};
    justify-content: ${(props) => props.justifyContent ?? "flex-start"};
    gap: 2rem;
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 2px;
    overflow-y: scroll;
    padding: 1.5rem;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: ${Colors.whiteInput};
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${Colors.scrollbarThumb};
        background-image: ${Colors.scrollbarGradient};
        border-radius: 4px;
    }
    @media ${device.laptop} {
        width: 55%;
        height: 45%;
    }
    @media ${device.tablet} {
        width: 60%;
        height: 45%;
    }
    @media ${device.mobileL} {
        width: 80%;
        height: 45%;
        justify-content: ${(props) => props.justifyContent ?? "flex-start"};
    }
`;
