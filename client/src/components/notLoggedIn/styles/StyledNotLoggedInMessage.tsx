import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

export const StyledNotLoggedInMessage = styled.h1`
    font-size: 3rem;
    text-align: center;

    @media ${device.laptop} {
        font-size: 2rem;
    }
`;
