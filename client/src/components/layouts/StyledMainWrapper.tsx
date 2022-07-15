import styled from "styled-components";

interface StyledMainWrapperProps {
    alignItems: string;
}

export const StyledMainWrapper = styled.div<Partial<StyledMainWrapperProps>>`
    width: 100%;
    display: flex;
    align-items: ${(props) => props.alignItems ?? "flex-start"};
    justify-content: space-between;
`;
