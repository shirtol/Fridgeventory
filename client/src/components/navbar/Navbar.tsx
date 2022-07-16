import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../../context/userContext/User.context";
import { navbarImages } from "../../utils/stylesUtils/images";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledNavbar } from "./styles/StyledNavbar";
import { StyledNavbarIcon } from "./styles/StyledNavbarIcon";
import { StyledNavbarItem } from "./styles/StyledNavbarItem";

const Navbar = () => {
    const { token } = useUser();
    const location = useLocation<string>();
    console.log(location);

    return (
        <StyledNavbar>
            <StyledNavbarItem selected={location.pathname === "/"}>
                <NavLink to="/">
                    <StyledFlexWrapper justifyContent="flex-start">
                        <StyledNavbarIcon
                            src={navbarImages.welcome}
                        ></StyledNavbarIcon>
                        Welcome
                    </StyledFlexWrapper>
                </NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem selected={location.pathname === "/fridge"}>
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
                <StyledNavbarItem selected={location.pathname === "/register"}>
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
                <StyledNavbarItem selected={location.pathname === "/login"}>
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
                <StyledNavbarItem selected={location.pathname === "/logout"}>
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
        </StyledNavbar>
    );
};

export default Navbar;
