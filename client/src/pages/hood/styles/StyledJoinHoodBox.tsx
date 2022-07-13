import styled from "styled-components";
import { Shadows } from "../../../utils/stylesUtils/stylesConsts";

export const StyledJoinHoodBox = styled.div`
    width: 40%;
    box-shadow: ${Shadows.inputBoxShadow};
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 2rem;
    text-align: center;
`;
