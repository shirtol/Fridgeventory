import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

export const StyledNavbar = styled.aside`
    display: flex;
    height: 100%;
    flex-direction: column;
    list-style: none;
    font-size: 1.7rem;
    align-items: flex-start;
    justify-content: flex-start;
    width: 17%;
    gap: 1rem;
    z-index: 100;
    padding-top: 2rem;
    background: ${Colors.whiteSmoke60};
    align-self: flex-start;
    @media ${device.tablet} {
        display: none;
    }
`;
