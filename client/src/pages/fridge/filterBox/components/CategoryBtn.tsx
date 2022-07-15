import React from "react";
import { useFilter } from "../Filter.context";
import { StyledCategoryBtn } from "../styles/StyledCategoryBtn";

interface CategoryBtnProps {
    text: string;
}

const CategoryBtn = ({ text }: CategoryBtnProps) => {
    const { selectedCategories, updateSelectedCategories } = useFilter();
    return (
        <StyledCategoryBtn
            onClick={() => updateSelectedCategories!(text)}
            isSelected={selectedCategories?.includes(text)}
        >
            {text}
        </StyledCategoryBtn>
    );
};

export default CategoryBtn;
