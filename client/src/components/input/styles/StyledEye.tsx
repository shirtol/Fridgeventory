import styled, { css } from "styled-components";
import { iconsImages } from "../../../utils/stylesUtils/images";

interface StyledEyeProps {
    isPassword: boolean;
    showPassword: boolean;
}

export const StyledEye = styled.div<Partial<StyledEyeProps>>`
    &::after {
        display: ${(props) => (props.isPassword ? "block" : "none")};
        content: ${(props) =>
            props.showPassword
                ? css`url(${iconsImages.eyeClose})`
                : css`url(${iconsImages.eye})`};
        position: absolute;
        z-index: 300;
        right: 1rem;
        top: 50%;
        margin-top: -12px;
        cursor: pointer;
    }
`;
