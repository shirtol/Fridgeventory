import styled from "styled-components";
import { AlignItems } from "./layout.types";

interface StyledMainWrapperProps {
    alignItems: AlignItems;
    height: string;
}

export const StyledMainWrapper = styled.div<Partial<StyledMainWrapperProps>>`
    width: 100%;
    display: flex;
    height: ${(props) => props.height ?? "auto"};
    align-items: ${(props) => props.alignItems ?? "flex-start"};
    justify-content: space-between;
`;
