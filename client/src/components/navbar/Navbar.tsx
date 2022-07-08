import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeaderWrapper } from "../layouts/StyledHeaderWrapper";
import { StyledNavbar } from "./styles/StyledNavbar";
import { StyledNavbarItem } from "./styles/StyledNavbarItem";

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledNavbarItem>
                <NavLink to="/">Home</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/fridge">Fridge</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/shopping-list">Shopping List</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/hood">Hood</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/statistics">Statistics</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/register">Register</NavLink>
            </StyledNavbarItem>
        </StyledNavbar>
    );
};

export default Navbar;
