import styled from "styled-components";
import device from "../../utils/stylesUtils/mediaQuerySizes";
import { Colors } from "../../utils/stylesUtils/stylesConsts";

export const StyledLogo = styled.img`
    width: 5rem;
    @media ${device.mobileL} {
        width: 4rem;
    }
`;
