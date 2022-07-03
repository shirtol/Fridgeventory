import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

export const StyledNavbar = styled.header`
    display: flex;
    list-style: none;
    gap: 3.5rem;
    font-size: 2rem;
    padding: 2rem;
    height: 10vh;
    @media ${device.tablet} {
        display: none;
    }
`;