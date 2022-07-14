import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";

interface StyledHoodProductsWrapperProps {
    gridTemplateColumn: string;
    gridTemplateColLaptop: string;
}

export const StyledHoodProductsWrapper = styled.div<
    Partial<StyledHoodProductsWrapperProps>
>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.gridTemplateColumn ?? "repeat(3, 1fr)"};
    gap: 2rem;
    justify-items: center;
    align-items: center;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
    @media ${device.laptopL} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColLaptop ??
            props.gridTemplateColumn ??
            "repeat(3, 1fr)"};
    }
`;
