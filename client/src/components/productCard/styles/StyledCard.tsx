import styled from "styled-components";
import { Shadows } from "../../../utils/stylesUtils/stylesConsts";

interface StyledCardProps {
    boxShadow: string;
}

export const StyledCard = styled.div<Partial<StyledCardProps>>`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: ${(props) => props.boxShadow ?? Shadows.cardBoxShadow};
    border-radius: 4px;
    position: relative;
    gap: 1rem;
    padding: 1rem 0;
    & > * {
        flex: 1;
    }
`;
