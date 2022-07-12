import styled from "styled-components";

export const StyledHoodProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    justify-items: center;
    align-items: center;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
    height: 95vh;
    padding: 10rem;
`;
