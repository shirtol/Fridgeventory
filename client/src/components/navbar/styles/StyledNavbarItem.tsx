import styled from "styled-components";
import { Colors } from "../../../utils/stylesUtils/stylesConsts";

interface StyledNavbarItemProps {
    selected: boolean;
}

export const StyledNavbarItem = styled.li<Partial<StyledNavbarItemProps>>`
    height: max-content;
    width: 100%;
    padding: 1rem;
    background: ${(props) => (props.selected ? Colors.blue20 : "transparent")};
    background-image: linear-gradient(${Colors.blue20}, ${Colors.blue20});
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: 0.6s;

    & > * {
        text-decoration: none;
        color: ${(props) => props.color ?? Colors.blackText};
    }

    &:hover {
        background-size: 100% 100%;
    }
`;
