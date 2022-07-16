import styled, { css } from "styled-components";

interface StyledContextMenuImageProps {
    disabled: boolean;
}

export const StyledContextMenuImage = styled.img<
    Partial<StyledContextMenuImageProps>
>`
    width: 2rem;
    filter: ${(props) =>
        props.disabled ? css`grayscale(1)` : css`grayscale(0)`};
`;
