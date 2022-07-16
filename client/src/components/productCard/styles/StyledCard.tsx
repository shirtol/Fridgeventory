import styled from "styled-components";
import device from "../../../utils/stylesUtils/mediaQuerySizes";
import { Colors, Shadows } from "../../../utils/stylesUtils/stylesConsts";

interface StyledCardProps {
    boxShadow: string;
    isShared: boolean;
    isMyProduct: boolean;
}

export const StyledCard = styled.div<Partial<StyledCardProps>>`
    display: flex;
    width: 30rem;
    height: max-content;
    align-items: center;
    justify-content: space-around;
    box-shadow: ${(props) => props.boxShadow ?? Shadows.cardBoxShadow};
    border-radius: 4px;
    position: relative;
    gap: 1rem;
    padding: 1rem;
    & > * {
        flex: 1;
        text-align: center;
    }

    &::after {
        display: ${(props) =>
            props.isShared && props.isMyProduct ? "block" : "none"};
        --f: 10px;
        --r: 15px;
        --t: 10px;
        content: "Shared";
        position: absolute;
        inset: var(--t) calc(-1 * var(--f)) auto auto;
        padding: 0 10px var(--f) calc(10px + var(--r));
        clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - var(--f)),
            calc(100% - var(--f)) 100%,
            calc(100% - var(--f)) calc(100% - var(--f)),
            0 calc(100% - var(--f)),
            var(--r) calc(50% - var(--f) / 2)
        );
        background: ${Colors.ribbon};
        color: ${Colors.whiteSmoke};
        box-shadow: 0 calc(-1 * var(--f)) 0 inset #0005;
    }

    @media ${device.tabletS} {
        width: 25rem;
        padding: 2rem;
    }
`;
