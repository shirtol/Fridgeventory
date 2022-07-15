import React from "react";
import CloseBtn from "../../components/closeBtn/CloseBtn";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import { categoryOptions } from "../../utils/products/consts";
import CategoryBtn from "./filterBox/components/CategoryBtn";
import ExpiryRadioForm from "./filterBox/components/ExpiryRadioForm";
import FilterTitle from "./filterBox/components/FilterTitle";
import SortByForm from "./filterBox/components/SortByForm";
import { StyledSeparator } from "./filterBox/styles/StyledSeparator";

interface FilterModalProps {
    closeModal: () => void;
}

const FilterModal = ({ closeModal }: FilterModalProps) => {
    const renderCategoryBtns = () => {
        return categoryOptions.map((category) => {
            return <CategoryBtn text={category} key={category}></CategoryBtn>;
        });
    };

    return (
        <StyledModalWrapper onClick={closeModal} isAbove={true}>
            <StyledModal onClick={(e) => e.stopPropagation()} width="30%">
                <CloseBtn onClick={closeModal}></CloseBtn>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle text="Category"></FilterTitle>
                    <StyledFlexWrapper flexWrap="wrap">
                        {renderCategoryBtns()}
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
                <StyledSeparator></StyledSeparator>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle text="Expiry"></FilterTitle>
                    <StyledFlexWrapper justifyContent="flex-start">
                        <ExpiryRadioForm></ExpiryRadioForm>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
                <StyledSeparator></StyledSeparator>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle text="Sort By"></FilterTitle>
                    <StyledFlexWrapper justifyContent="flex-start">
                        <SortByForm></SortByForm>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default FilterModal;
