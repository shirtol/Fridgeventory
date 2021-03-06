import React from "react";
import CloseBtn from "../../components/closeBtn/CloseBtn";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import { useTranslation } from "../../context/translation/Translation.context";
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
    const { t } = useTranslation();

    const renderCategoryBtns = () => {
        return categoryOptions.map((category) => {
            return (
                <CategoryBtn
                    text={t(`categories.${category}`)}
                    key={category}
                ></CategoryBtn>
            );
        });
    };

    return (
        <StyledModalWrapper onClick={closeModal} isAbove={true}>
            <StyledModal onClick={(e) => e.stopPropagation()} width="30%">
                <CloseBtn onClick={closeModal}></CloseBtn>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle
                        text={t("modals.filter.category")}
                    ></FilterTitle>
                    <StyledFlexWrapper flexWrap="wrap">
                        {renderCategoryBtns()}
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
                <StyledSeparator></StyledSeparator>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle
                        text={t("modals.filter.expiry.title")}
                    ></FilterTitle>
                    <StyledFlexWrapper justifyContent="flex-start">
                        <ExpiryRadioForm></ExpiryRadioForm>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
                <StyledSeparator></StyledSeparator>
                <StyledFlexWrapper flexDirection="column">
                    <FilterTitle
                        text={t("modals.filter.sort.title")}
                    ></FilterTitle>
                    <StyledFlexWrapper justifyContent="flex-start">
                        <SortByForm></SortByForm>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default FilterModal;
