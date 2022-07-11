import styled from "styled-components";
import { BooleanLiteral } from "typescript";

interface StyledExpireDaysProps {
    numOfDays: number;
}

export const StyledExpireDays = styled.span<StyledExpireDaysProps>`
    color: ${(props) => (props.numOfDays < 5 ? "red" : "green")};
`;
