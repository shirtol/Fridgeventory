import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext/User.context";
import { StyledNavbarItem } from "../navbar/styles/StyledNavbarItem";
import { styles } from "./styles/hamburgerMenuStyles";
import "./styles/hamburgerMenuStyle.css";
import { StyledBurgerWrapper } from "./styles/StyledBurgerWrapper";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const { token } = useUser();

    return (
        <StyledBurgerWrapper>
            <Menu
                className="hamburger-menu"
                styles={styles}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                isOpen={open}
                // customBurgerIcon={<img src={imageData.avatar} alt="avatar" />}
            >
                <StyledNavbarItem onClick={() => setOpen(false)}>
                    <NavLink to="/">Home</NavLink>
                </StyledNavbarItem>

                <StyledNavbarItem onClick={() => setOpen(false)}>
                    <NavLink to="/fridge">Fridge</NavLink>
                </StyledNavbarItem>

                <StyledNavbarItem onClick={() => setOpen(false)}>
                    <NavLink to="/hood">Hood</NavLink>
                </StyledNavbarItem>

                <StyledNavbarItem onClick={() => setOpen(false)}>
                    <NavLink to="/statistics">Statistics</NavLink>
                </StyledNavbarItem>

                {!token && (
                    <StyledNavbarItem onClick={() => setOpen(false)}>
                        <NavLink to="/register">Register</NavLink>
                    </StyledNavbarItem>
                )}

                {!token && (
                    <StyledNavbarItem onClick={() => setOpen(false)}>
                        <NavLink to="/login">Login</NavLink>
                    </StyledNavbarItem>
                )}

                {token && (
                    <StyledNavbarItem onClick={() => setOpen(false)}>
                        <NavLink to="/logout">Logout</NavLink>
                    </StyledNavbarItem>
                )}
            </Menu>
        </StyledBurgerWrapper>
    );
};

export default HamburgerMenu;
