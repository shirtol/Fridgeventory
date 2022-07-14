import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext/User.context";
import { StyledHeaderWrapper } from "../layouts/StyledHeaderWrapper";
import { StyledNavbar } from "./styles/StyledNavbar";
import { StyledNavbarItem } from "./styles/StyledNavbarItem";

const Navbar = () => {
    const { token } = useUser();

    return (
        <StyledNavbar>
            <StyledNavbarItem>
                <NavLink to="/">Home</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/fridge">Fridge</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/hood">Hood</NavLink>
            </StyledNavbarItem>

            <StyledNavbarItem>
                <NavLink to="/statistics">Statistics</NavLink>
            </StyledNavbarItem>

            {!token && (
                <StyledNavbarItem>
                    <NavLink to="/register">Register</NavLink>
                </StyledNavbarItem>
            )}

            {!token && (
                <StyledNavbarItem>
                    <NavLink to="/login">Login</NavLink>
                </StyledNavbarItem>
            )}

            {token && (
                <StyledNavbarItem>
                    <NavLink to="/logout">Logout</NavLink>
                </StyledNavbarItem>
            )}
        </StyledNavbar>
    );
};

export default Navbar;
