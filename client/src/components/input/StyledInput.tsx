import styled from "styled-components";
import device from "../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../utils/stylesUtils/stylesConsts";

export const StyledInput = styled.input`
    font-family: "Poppins", sans-serif;
    letter-spacing: 1.5px;
    height: 3rem;
    width: 30rem;
    border-radius: 4px;
    border: none;
    box-shadow: ${Shadows.inputBoxShadow};
    user-select: all;
    padding-left: 1rem;
    &:focus {
        outline: none;
        border: ${Colors.orange} 1px solid;
    }
    background: ${(props) => props.color ?? Colors.whiteInput};
    @media ${device.tablet} {
        width: 20rem;
    }
    @media ${device.mobileM} {
        width: 15rem;
    }
`;
