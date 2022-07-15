import React from "react";
import { StyledFilterTitle } from "../styles/StyledFilterTitle";

interface FilterTitleProps {
    text: string;
}

const FilterTitle = ({ text }: FilterTitleProps) => {
    return <StyledFilterTitle>{text}</StyledFilterTitle>;
};

export default FilterTitle;
