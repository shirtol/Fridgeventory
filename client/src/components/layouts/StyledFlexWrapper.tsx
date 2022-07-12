import { ReactNode } from "react";
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
    cursor?: string;
    paddingLeft?: string;
    paddingTop?: string;
    alignSelf?: string;
    justifySelf?: string;
    paddingRight?: string;
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
    cursor: ${(props) => props.cursor ?? "auth"};
    padding-left: ${(props) => props.paddingLeft ?? "0"};
    padding-right: ${(props) => props.paddingRight ?? "0"};
    padding-top: ${(props) => props.paddingTop ?? "0"};
    align-self: ${(props) => props.alignSelf ?? "auto"};
    justify-self: ${(props) => props.justifySelf ?? "auto"};
`;
