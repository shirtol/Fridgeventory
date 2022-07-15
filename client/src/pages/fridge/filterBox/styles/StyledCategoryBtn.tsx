import styled from "styled-components";
import { Colors } from "../../../../utils/stylesUtils/stylesConsts";

interface StyledCategoryBtnProps {
    isSelected: boolean;
}

export const StyledCategoryBtn = styled.div<Partial<StyledCategoryBtnProps>>`
    border: 1px solid ${Colors.blue};
    border-radius: 30px;
    padding: 5px;
    font-size: 1rem;
    cursor: pointer;
    background: ${(props) => (props.isSelected ? Colors.blue : "none")};
    color: ${(props) =>
        props.isSelected ? Colors.whiteSmoke : Colors.blackText};
`;
