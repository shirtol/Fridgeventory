import styled from "styled-components";

interface StyledHoodProductsWrapperProps {
    gridTemplateColumn: string;
}

export const StyledHoodProductsWrapper = styled.div<
    Partial<StyledHoodProductsWrapperProps>
>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.gridTemplateColumn ?? "repeat(3, 1fr)"};
    gap: 2rem;
    justify-items: center;
    align-items: center;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
`;
