import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../../context/userContext/User.context";
import { StyledNavbarItem } from "../navbar/styles/StyledNavbarItem";
import { styles } from "./styles/hamburgerMenuStyles";
import "./styles/hamburgerMenuStyle.css";
import { StyledBurgerWrapper } from "./styles/StyledBurgerWrapper";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledNavbarIcon } from "../navbar/styles/StyledNavbarIcon";
import { navbarImages } from "../../utils/stylesUtils/images";
import { useWindowWidth } from "@react-hook/window-size";
import { useTranslation } from "../../context/translation/Translation.context";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const { token } = useUser();
    const location = useLocation<string>();
    const width = useWindowWidth();
    const { t } = useTranslation();

    useEffect(() => {
        if (width > 772) {
            setOpen(false);
        }
    }, [width]);

    return (
        <StyledBurgerWrapper>
            <Menu
                className="hamburger-menu"
                styles={styles}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(false)}
                isOpen={open}
            >
                <StyledNavbarItem
                    onClick={() => setOpen(false)}
                    selected={location.pathname === "/"}
                >
                    <NavLink to="/">
                        <StyledFlexWrapper justifyContent="flex-start">
                            <StyledNavbarIcon
                                src={navbarImages.welcome}
                            ></StyledNavbarIcon>
                            {t("welcome.navButton")}
                        </StyledFlexWrapper>
                    </NavLink>
                </StyledNavbarItem>

                <StyledNavbarItem
                    onClick={() => setOpen(false)}
                    selected={location.pathname === "/fridge"}
                >
                    <NavLink to="/fridge">
                        <StyledFlexWrapper justifyContent="flex-start">
                            <StyledNavbarIcon
                                src={navbarImages.fridge}
                            ></StyledNavbarIcon>
                            {t("fridge.navButton")}
                        </StyledFlexWrapper>
                    </NavLink>
                </StyledNavbarItem>

                <StyledNavbarItem
                    onClick={() => setOpen(false)}
                    selected={
                        location.pathname === "/hood" ||
                        location.pathname === "/my-hood"
                    }
                >
                    <NavLink to="/hood">
                        <StyledFlexWrapper justifyContent="flex-start">
                            <StyledNavbarIcon
                                src={navbarImages.hood}
                            ></StyledNavbarIcon>
                            {t("hood.navButton")}
                        </StyledFlexWrapper>
                    </NavLink>
                </StyledNavbarItem>

                {!token && (
                    <StyledNavbarItem
                        onClick={() => setOpen(false)}
                        selected={location.pathname === "/register"}
                    >
                        <NavLink to="/register">
                            <StyledFlexWrapper justifyContent="flex-start">
                                <StyledNavbarIcon
                                    src={navbarImages.register}
                                ></StyledNavbarIcon>
                                {t("register.navButton")}
                            </StyledFlexWrapper>
                        </NavLink>
                    </StyledNavbarItem>
                )}

                {!token && (
                    <StyledNavbarItem
                        onClick={() => setOpen(false)}
                        selected={location.pathname === "/login"}
                    >
                        <NavLink to="/login">
                            <StyledFlexWrapper justifyContent="flex-start">
                                <StyledNavbarIcon
                                    src={navbarImages.login}
                                ></StyledNavbarIcon>
                                {t("login.navButton")}
                            </StyledFlexWrapper>
                        </NavLink>
                    </StyledNavbarItem>
                )}

                {token && (
                    <StyledNavbarItem
                        onClick={() => setOpen(false)}
                        selected={location.pathname === "/logout"}
                    >
                        <NavLink to="/logout">
                            <StyledFlexWrapper justifyContent="flex-start">
                                <StyledNavbarIcon
                                    src={navbarImages.logout}
                                ></StyledNavbarIcon>
                                {t("logout.navButton")}
                            </StyledFlexWrapper>
                        </NavLink>
                    </StyledNavbarItem>
                )}
            </Menu>
        </StyledBurgerWrapper>
    );
};

export default HamburgerMenu;
