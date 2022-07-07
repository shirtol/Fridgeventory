import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

export const StyledInput = styled.input`
    text-align: center;
    padding-top: 1rem;
    width: 100%;
    height: 5rem;
    font-weight: 600;
    font-size: 2rem;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    background: #f6f6f68a;
    border-radius: 1rem;
    color: #111;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
    outline: none;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* font-family: "Poppins", sans-serif;
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
    } */
`;
