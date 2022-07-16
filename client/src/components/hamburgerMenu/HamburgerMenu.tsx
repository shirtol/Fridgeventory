import React, { useState } from "react";
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

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const { token } = useUser();
    const location = useLocation<string>();

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
                            Welcome
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
                            Fridge
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
                            Hood
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
                                Register
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
                                Login
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
                                Logout
                            </StyledFlexWrapper>
                        </NavLink>
                    </StyledNavbarItem>
                )}
            </Menu>
        </StyledBurgerWrapper>
    );
};

export default HamburgerMenu;
