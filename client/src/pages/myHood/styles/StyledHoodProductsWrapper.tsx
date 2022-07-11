import styled from "styled-components";

export const StyledHoodProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    justify-items: center;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
    width: 80%;
    padding-bottom: 2rem;
`;
