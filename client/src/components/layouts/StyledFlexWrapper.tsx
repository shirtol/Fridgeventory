import styled from "styled-components";
import device from "../../utils/stylesUtils/mediaQuerySizes";
import {
    AlignItems,
    FlexDirection,
    JustifyContent,
    Overflow,
} from "./layout.types";
interface StyledFlexWrapperProps {
    flexDirection?: FlexDirection;
    gap?: string;
    alignItems?: AlignItems;
    width?: string;
    justifyContent?: JustifyContent;
    height?: string;
    overflowY?: Overflow;
    marginTop?: string;
    cursor?: string;
    paddingLeft?: string;
    paddingTop?: string;
    alignSelf?: string;
    justifySelf?: string;
    paddingRight?: string;
    flexDirectionTablet?: string;
    paddingBottom?: string;
    widthMobileL?: string;
    flexWrap?: string;
}

export const StyledFlexWrapper = styled.div<StyledFlexWrapperProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ?? "row"};
    gap: ${(props) => props.gap ?? "2rem"};
    align-items: ${(props) => props.alignItems ?? "center"};
    width: ${(props) => props.width ?? "100%"};
    justify-content: ${(props) => props.justifyContent ?? "center"};
    height: ${(props) => props.height ?? "auto"};
    overflow-y: ${(props) => props.overflowY ?? "visible"};
    margin-top: ${(props) => props.marginTop ?? "0"};
    cursor: ${(props) => props.cursor ?? "auth"};
    padding-left: ${(props) => props.paddingLeft ?? "0"};
    padding-right: ${(props) => props.paddingRight ?? "0"};
    padding-top: ${(props) => props.paddingTop ?? "0"};
    padding-bottom: ${(props) => props.paddingBottom ?? "0"};
    align-self: ${(props) => props.alignSelf ?? "auto"};
    justify-self: ${(props) => props.justifySelf ?? "auto"};
    flex-wrap: ${(props) => props.flexWrap ?? "no-wrap"};
    @media ${device.tablet} {
        flex-direction: ${(props) =>
            props.flexDirection ?? props.flexDirectionTablet ?? "row"};
    }
    @media ${device.mobileL} {
        width: ${(props) => props.widthMobileL ?? props.width ?? "100%"};
    }
`;
