import styled from "styled-components";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

export const StyledNavbarItem = styled.li`
    height: max-content;
    & > * {
        text-decoration: none;
        color: ${(props) => props.color ?? Colors.blackText};
        &:hover {
            color: ${Colors.orange};
            transition: 200ms ease-in-out;
        }
    }
`;
