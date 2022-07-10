import React from "react";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledHoodCard } from "./styles/StyledHoodCard";
import { StyledHoodLocation } from "./styles/StyledHoodLocation";

interface HoodCardProps {
    hood: Hood;
    onHoodClicked: (hood: Hood) => void;
}

const HoodCard = ({ hood, onHoodClicked }: HoodCardProps) => {
    const onClick = () => {
        onHoodClicked(hood);
    };

    return (
        <StyledHoodCard onClick={onClick}>
            <StyledHoodLocation>{hood.location}</StyledHoodLocation>
        </StyledHoodCard>
    );
};

export default HoodCard;
