import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeaderWrapper } from "../layouts/StyledHeaderWrapper";
import { StyledNavbar } from "./styles/StyledNavbar";
import { StyledNavbarItem } from "./styles/StyledNavbarItem";

const Navbar = () => {
    return (
        <StyledHeaderWrapper>
            <StyledNavbar>
                <StyledNavbarItem>
                    <NavLink to="/">Home</NavLink>
                </StyledNavbarItem>
            </StyledNavbar>
        </StyledHeaderWrapper>
    );
};

export default Navbar;
