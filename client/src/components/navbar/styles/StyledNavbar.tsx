import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

export const StyledNavbar = styled.header`
    display: flex;
    list-style: none;
    height: max-content;
    gap: 3.5rem;
    font-size: 1.7rem;
    align-items: center;
    padding-left: 2rem;
    height: 7vh;

    @media ${device.tablet} {
        display: none;
    }
`;
