import styled from "styled-components";
import { Colors } from "../../utils/stylesUtils/stylesConsts";

export const StyledModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: ${Colors.modalWrapperBg};
`;
