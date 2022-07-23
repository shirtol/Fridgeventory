import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "../../context/translation/Translation.context";
import { useUser } from "../../context/userContext/User.context";
import { navbarImages } from "../../utils/stylesUtils/images";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledNavbar } from "./styles/StyledNavbar";
import { StyledNavbarIcon } from "./styles/StyledNavbarIcon";
import { StyledNavbarItem } from "./styles/StyledNavbarItem";

const Navbar = () => {
    const { token } = useUser();
    const location = useLocation<string>();
    const { t } = useTranslation();

    return (
        <StyledNavbar>
            <StyledNavbarItem selected={location.pathname === "/"}>
                <NavLink to="/">
                    <StyledFlexWrapper justifyContent="flex-start">
                        <StyledNavbarIcon
                            src={navbarImages.welcome}
                        ></StyledNavbarIcon>
                        {t("welcome.navButton")}
                    </StyledFlexWrapper>
                </NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem selected={location.pathname === "/fridge"}>
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
                <StyledNavbarItem selected={location.pathname === "/register"}>
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
                <StyledNavbarItem selected={location.pathname === "/login"}>
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
                <StyledNavbarItem selected={location.pathname === "/logout"}>
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
        </StyledNavbar>
    );
};

export default Navbar;
