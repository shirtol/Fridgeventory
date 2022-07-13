import styled from "styled-components";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

export const StyledCameraIcon = styled.i`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    z-index: 20;
    cursor: pointer;
    color: ${Colors.blue};
    text-shadow: ${Shadows.addBtnBoxShadow};
`;
