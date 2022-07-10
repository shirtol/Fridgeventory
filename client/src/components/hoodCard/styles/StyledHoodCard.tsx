import styled from "styled-components";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

export const StyledHoodCard = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: ${Shadows.inputBoxShadow}; */
    border: 1px solid #dcdcdc;
    /* border-radius: 4px; */
    position: relative;
    gap: 1rem;
    padding: 2rem;
    cursor: pointer;
    & > * {
        flex: 1;
    }
`;
