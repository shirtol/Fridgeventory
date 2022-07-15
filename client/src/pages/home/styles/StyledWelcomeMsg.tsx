import styled from "styled-components";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

interface StyledWelcomeMsgProps {
    fontSize: string;
    color: string;
}

export const StyledWelcomeMsg = styled.h3<Partial<StyledWelcomeMsgProps>>`
    font-size: ${(props) => props.fontSize ?? "1.5rem"};
    color: ${(props) => props.color ?? Colors.blackText};
`;
