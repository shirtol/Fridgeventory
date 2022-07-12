import styled from "styled-components";

export const StyledMainAreaGrid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
        "header header header header"
        "sidebar main main main"
        "sidebar main main main"
        "sidebar main main main"
        "sidebar main main main";
    /* grid-template-rows: 10vh 90vh;
    grid-template-columns: 15rem 1fr; */
    /* grid-template-rows: 20% 20% 40% 20%;
    grid-template-columns: 25% 25% 25% 25%; */
`;
