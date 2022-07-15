import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

export const StyledJoinHoodModal = styled.div`
    display: none;
    position: relative;
    @media ${device.tablet} {
        display: block;
    }
`;
