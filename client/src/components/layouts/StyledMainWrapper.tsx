import styled from "styled-components";

interface StyledMainWrapperProps {
    alignItems: string;
    height: string;
}

export const StyledMainWrapper = styled.div<Partial<StyledMainWrapperProps>>`
    width: 100%;
    display: flex;
    height: ${(props) => props.height ?? "auto"};
    align-items: ${(props) => props.alignItems ?? "flex-start"};
    justify-content: space-between;
`;
