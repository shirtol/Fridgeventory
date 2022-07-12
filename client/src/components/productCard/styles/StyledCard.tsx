import styled from "styled-components";
import { Shadows } from "../../../utils/stylesUtils/stylesConsts";

interface StyledCardProps {
    boxShadow: string;
    isShared: boolean;
    isMyFridge: boolean;
}

export const StyledCard = styled.div<Partial<StyledCardProps>>`
    display: flex;
    width: 30rem;
    align-items: center;
    justify-content: space-around;
    box-shadow: ${(props) => props.boxShadow ?? Shadows.cardBoxShadow};
    border-radius: 4px;
    position: relative;
    gap: 1rem;
    padding: 1rem;
    border: ${(props) =>
        props.isShared
            ? props.isMyFridge
                ? "1px solid #3C80B9"
                : "none"
            : "none"};
    & > * {
        flex: 1;
        text-align: center;
    }
`;
