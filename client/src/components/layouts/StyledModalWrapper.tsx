import styled from "styled-components";
import { Colors } from "../../utils/stylesUtils/stylesConsts";

interface StyledModalWrapperProps {
    isAbove?: boolean;
}

export const StyledModalWrapper = styled.div<StyledModalWrapperProps>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${(props) => (props.isAbove ? "10" : "1")};
    background: ${Colors.modalWrapperBg};
`;
