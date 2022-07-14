import styled from "styled-components";

interface StyledTitleProps {
    fontSize?: string;
    width?: string;
}

export const StyledTitle = styled.h3<StyledTitleProps>`
    font-size: ${(props) => props.fontSize ?? "1.3rem"};
    text-align: center;
    width: ${(props) => props.width ?? "auto"}
`;
