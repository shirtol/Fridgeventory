import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

export const StyledFilterIcon = styled.i`
    position: absolute;
    top: 7rem;
    right: 2rem;
    z-index: 250;
    color: ${Colors.blue};
    cursor: pointer;
`;
