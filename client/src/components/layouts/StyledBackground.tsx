import styled from "styled-components";
import { backgroundImages } from "../../utils/stylesUtils/images";

export const StyledBackground = styled.div`
    background: url(${backgroundImages.bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: absolute;
    opacity: 0.4;
    min-height: 93vh;
`;
