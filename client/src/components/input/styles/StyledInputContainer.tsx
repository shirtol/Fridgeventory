import styled from "styled-components";
import { iconsImages } from "../../../utils/stylesUtils/images";

export const StyledInputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    &:focus-within label {
        transform: translate(0, 5px) scale(0.8);
        color: #777;
        margin-top: 0;
    }
`;
