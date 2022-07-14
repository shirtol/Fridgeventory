import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

interface StyledLabelProps {
    isTransform?: string | number;
}

export const StyledLabel = styled.label<StyledLabelProps>`
    position: absolute;
    pointer-events: none;
    transform: translate(0, 23px) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: #333;
    font-size: 1.4rem;
    left: 5px;
    top: 0;
    margin-top: -0.5rem;
    height: min-content;
    text-align: center;
    transform: ${(props) =>
        props.isTransform && "translate(0, 5px) scale(0.8)"};
    margin-top: ${(props) => props.isTransform && 0};
    @media ${device.tablet} {
        transform-origin: center top;
        width: max-content;
    }
`;
