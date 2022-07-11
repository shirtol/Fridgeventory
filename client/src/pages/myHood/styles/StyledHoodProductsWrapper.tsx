import styled from "styled-components";

export const StyledHoodProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
    width: 70%;
    padding-bottom: 2rem;
`;
