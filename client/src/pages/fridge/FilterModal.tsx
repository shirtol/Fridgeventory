import React from "react";
import CloseBtn from "../../components/closeBtn/CloseBtn";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import { categoryOptions } from "../../utils/products/consts";
import CategoryBtn from "./filterBox/CategoryBtn";
import FilterTitle from "./filterBox/FilterTitle";
import { StyledSeparator } from "./filterBox/styles/StyledSeparator";

interface FilterModalProps {
    closeModal: () => void;
    toggleSelectedCategory: (category: string) => void;
    selectedCategories: string[];
}

const FilterModal = ({
    closeModal,
    toggleSelectedCategory,
    selectedCategories,
}: FilterModalProps) => {
    const renderCategoryBtns = () => {
        return categoryOptions.map((category) => {
            return (
                <CategoryBtn
                    text={category}
                    isSelected={selectedCategories.includes(category)}
                    onClick={toggleSelectedCategory}
                ></CategoryBtn>
            );
        });
    };

    return (
        <StyledModalWrapper onClick={closeModal} isAbove={true}>
            <StyledModal onClick={(e) => e.stopPropagation()} width="30%">
                <CloseBtn onClick={closeModal}></CloseBtn>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle></FilterTitle>
                    <StyledFlexWrapper flexWrap="wrap">
                        {renderCategoryBtns()}
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
                <StyledSeparator></StyledSeparator>
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default FilterModal;
