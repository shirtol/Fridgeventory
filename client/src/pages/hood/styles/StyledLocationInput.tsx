import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

export const StyledLocationInput = styled.input`
    text-align: center;
    padding-top: 1rem;
    width: 30%;
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
`;