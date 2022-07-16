import { Colors } from "../../../utils/stylesUtils/stylesConsts";

export const styles = {
    bmBurgerBars: {
        background: Colors.hamburgerMenuIcon,
    },
    bmCrossButton: {
        height: "2.4rem",
        width: "2.4rem",
        zIndex: "220",
    },
    bmMenuWrap: {
        position: "fixed",
        height: "100%",
        width: "23rem",
    },
    bmMenu: {
        backgroundImage: Colors.hamburgerMenuBg,
        background: Colors.whiteSmoke,
        fontSize: "1.15em",
    },
    bmItemList: {
        gap: "0rem",
        display: "flex",
        flexDirection: "column",
    },
    bmItem: {
        display: "inline-block",
    },
};
