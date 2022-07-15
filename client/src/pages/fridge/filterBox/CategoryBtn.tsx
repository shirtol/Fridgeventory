import React from "react";
import { StyledCategoryBtn } from "./styles/StyledCategoryBtn";

interface CategoryBtnProps {
    text: string;
    onClick: (category: string) => void;
    isSelected: boolean;
}

const CategoryBtn = ({ text, onClick, isSelected }: CategoryBtnProps) => {
    return (
        <StyledCategoryBtn
            onClick={() => onClick(text)}
            isSelected={isSelected}
        >
            {text}
        </StyledCategoryBtn>
    );
};

export default CategoryBtn;
