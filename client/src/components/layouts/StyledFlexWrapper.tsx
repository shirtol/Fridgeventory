import styled from "styled-components";

interface StyledFlexWrapperProps {
    flexDirection?: string;
    gap?: string;
    alignItems?: string;
    width?: string;
    justifyContent?: string;
    height?: string;
    overflowY?: string;
    marginTop?: string;
}

export const StyledFlexWrapper = styled.div<StyledFlexWrapperProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ?? "row"};
    gap: ${(props) => props.gap ?? "2rem"};
    align-items: ${(props) => props.alignItems ?? "center"};
    width: ${(props) => props.width ?? "100%"};
    justify-content: ${(props) => props.justifyContent ?? "center"};
    height: ${(props) => props.height ?? "auto"};
    overflow-y: ${(props) => props.overflowY ?? "visible"};
    margin-top: ${(props) => props.marginTop ?? "0"};
`;
