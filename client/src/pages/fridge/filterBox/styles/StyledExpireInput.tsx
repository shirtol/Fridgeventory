import styled from "styled-components";
import { Colors } from "../../../../utils/stylesUtils/stylesConsts";

export const StyledExpireInput = styled.input`
    text-align: center;
    width: 15%;
    font-weight: 600;
    font-size: 1.4rem;
    color: #111;
    border: none;
    border-bottom: 1px solid ${Colors.greyIcon};
    outline: none;
    background: transparent;
`;
