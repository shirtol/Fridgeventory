import { ReactNode } from "react";
import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

interface StyledHomePageBoxProps {
    width: string;
    height: string;
    tabletOrder?: string;
    tabletWidth?: string;
    heightMobileL?: string;
    mobileLWidth?: string;
    children: ReactNode;
}

export const StyledHomePageBox = styled.div<StyledHomePageBoxProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    gap: 0;
    background: ${Colors.homePageBoxBg};
    box-shadow: ${Shadows.homePageBoxShadow};
    @media ${device.tablet} {
        order: ${(props) => props.tabletOrder ?? 0};
        width: ${(props) => props.tabletWidth ?? props.width};
    }
    @media ${device.mobileL} {
        height: ${(props) => props.heightMobileL ?? props.height};
        width: ${(props) =>
            props.mobileLWidth ?? props.tabletWidth ?? props.width};
    }
`;
