import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext/User.context";
import { navbarImages } from "../../utils/stylesUtils/images";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledNavbar } from "./styles/StyledNavbar";
import { StyledNavbarIcon } from "./styles/StyledNavbarIcon";
import { StyledNavbarItem } from "./styles/StyledNavbarItem";

const Navbar = () => {
    const { token } = useUser();

    return (
        <StyledNavbar>
            <StyledNavbarItem>
                <NavLink to="/">
                    <StyledFlexWrapper>
                        <StyledNavbarIcon
                            src={navbarImages.welcome}
                        ></StyledNavbarIcon>
                        Welcome
                    </StyledFlexWrapper>
                </NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/fridge">
                    <StyledFlexWrapper>
                        <StyledNavbarIcon
                            src={navbarImages.fridge}
                        ></StyledNavbarIcon>
                        Fridge
                    </StyledFlexWrapper>
                </NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/hood">
                    <StyledFlexWrapper>
                        <StyledNavbarIcon
                            src={navbarImages.hood}
                        ></StyledNavbarIcon>
                        Hood
                    </StyledFlexWrapper>
                </NavLink>
            </StyledNavbarItem>

            {!token && (
                <StyledNavbarItem>
                    <NavLink to="/register">
                        <StyledFlexWrapper>
                            <StyledNavbarIcon
                                src={navbarImages.register}
                            ></StyledNavbarIcon>
                            Register
                        </StyledFlexWrapper>
                    </NavLink>
                </StyledNavbarItem>
            )}

            {!token && (
                <StyledNavbarItem>
                    <NavLink to="/login">
                        <StyledFlexWrapper>
                            <StyledNavbarIcon
                                src={navbarImages.login}
                            ></StyledNavbarIcon>
                            Login
                        </StyledFlexWrapper>
                    </NavLink>
                </StyledNavbarItem>
            )}

            {token && (
                <StyledNavbarItem>
                    <NavLink to="/logout">
                        <StyledFlexWrapper>
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
