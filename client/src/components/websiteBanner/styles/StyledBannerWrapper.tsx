import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

export const StyledBannerWrapper = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 100%;
    background: ${Colors.whiteSmoke};
    top: 0;
    opacity: 0.6;
    gap: 2rem;
    & > * {
        text-align: center;
    }
    @media ${device.tablet} {
        justify-content: flex-end;
    }
    @media ${device.mobileL} {
        gap: 1.6rem;
    }
`;
