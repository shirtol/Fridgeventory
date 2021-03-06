import React from "react";
import { useLocation } from "react-router-dom";
import { StyledBackground } from "./StyledBackground";

const Background = () => {
    const location = useLocation();
    return <StyledBackground location={location.pathname}></StyledBackground>;
};

export default Background;
