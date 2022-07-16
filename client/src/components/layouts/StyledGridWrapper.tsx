import styled from "styled-components";
import device from "../../utils/stylesUtils/mediaQuerySizes";

interface StyledGridWrapperProps {
    gridTemplateCol: string;
    alignSelf: string;
    gridTemplateColLaptop: string;
    gridTemplateColLaptopM: string;
    gridTemplateColLaptopML: string;
    gridTemplateColsTablet: string;
    heightTablet: string;
    gridTemplateColsTabletS: string;
}

export const StyledGridWrapper = styled.div<Partial<StyledGridWrapperProps>>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.gridTemplateCol ?? "repeat(4, 1fr)"};
    gap: 2rem;
    justify-items: center;
    padding: 2rem;
    grid-auto-rows: 1fr;
    height: max-content;
    overflow-y: scroll;
    align-self: ${(props) => props.alignSelf ?? "center"};

    @media ${device.laptopML} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColLaptopML ?? "repeat(3, 1fr)"};
    }
    @media ${device.laptopM} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColLaptopM ?? "repeat(3, 1fr)"};
    }
    @media ${device.laptop} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColLaptop ?? "repeat(3, 1fr)"};
    }
    @media ${device.tablet} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColsTablet ?? "repeat(3, 1fr)"};
        height: ${(props) => props.heightTablet ?? "max-content"};
    }
    @media ${device.tabletS} {
        grid-template-columns: ${(props) =>
            props.gridTemplateColsTabletS ?? "repeat(2, 1fr)"};
    }
`;
