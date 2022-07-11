import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

export const StyledNavbar = styled.header`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 5rem;
    font-size: 1.7rem;
    align-items: flex-start;
    justify-content: flex-start;
    width: 17%;
    position: fixed;
    z-index: 100;
    top: 50%;
    margin-top: -20rem;
    left: 2rem;
    padding-left: 2rem;
    height: 100vh;
    align-self: flex-start;
    @media ${device.tablet} {
        display: none;
    }
`;
