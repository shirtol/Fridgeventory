import styled, { css } from "styled-components";
import { backgroundImages } from "../../utils/stylesUtils/images";

interface StyledBackgroundProps {
    location: string;
}

export const StyledBackground = styled.div<StyledBackgroundProps>`
    background: ${(props) => {
        let background;
        switch (props.location) {
            case "/my-hood":
                background = backgroundImages.bg;
                break;
            case "/fridge":
                background = backgroundImages.bg2;
                break;

            default:
                background = backgroundImages.bg4;
                break;
        }

        return css`
            url(${background})
        `;
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: absolute;
    opacity: 0.6;
`;
