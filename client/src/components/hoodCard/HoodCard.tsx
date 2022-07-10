import React from "react";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledHoodCard } from "./styles/StyledHoodCard";
import { StyledHoodLocation } from "./styles/StyledHoodLocation";

interface HoodCardProps {
    hood: Hood;
}

const HoodCard = ({ hood }: HoodCardProps) => {
    return (
        <StyledHoodCard>
            <StyledHoodLocation>{hood.location}</StyledHoodLocation>
        </StyledHoodCard>
    );
};

export default HoodCard;
