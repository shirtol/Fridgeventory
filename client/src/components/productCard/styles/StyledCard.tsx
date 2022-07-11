import styled from "styled-components";
import { Shadows } from "../../../utils/stylesUtils/stylesConsts";

interface StyledCardProps {
    boxShadow: string;
    hasShared: boolean;
}

export const StyledCard = styled.div<Partial<StyledCardProps>>`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: ${(props) => props.boxShadow ?? Shadows.cardBoxShadow};
    border-radius: 4px;
    position: relative;
    gap: 1rem;
    padding: 1rem;
    border: ${(props) => (props.hasShared ? "1px solid black" : "none")};
    & > * {
        flex: 1;
    }
`;
