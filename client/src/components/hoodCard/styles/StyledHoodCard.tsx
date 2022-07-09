import styled from "styled-components";
import { Shadows } from "../../../utils/stylesUtils/stylesConsts";

export const StyledHoodCard = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: ${Shadows.cardBoxShadow};
    border-radius: 4px;
    position: relative;
    gap: 1rem;
    padding: 1rem;
    & > * {
        flex: 1;
    }
`;
