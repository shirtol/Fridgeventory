import React from "react";
import Title from "../../../components/title/Title";
import Dropdown, { Option } from "react-dropdown";
import { StyledFlexWrapper } from "../../../components/layouts/StyledFlexWrapper";
import "react-dropdown/style.css";

import "./productCategoryChooserStyle.css";
import { categoryOptions } from "../../../utils/products/consts";

interface ProductCategoryChooserProps {
    onCategoryChange: (selectedCategory: Option) => void;
    category?: string;
}

const ProductCategoryChooser = ({
    onCategoryChange,
    category,
}: ProductCategoryChooserProps) => {
    return (
        <StyledFlexWrapper flexDirectionTablet="column">
            <Title titleText="Category"></Title>
            <Dropdown
                options={categoryOptions}
                onChange={onCategoryChange}
                value={category ?? categoryOptions[categoryOptions.length - 1]}
                className="Dropdown-root category-chooser"
                menuClassName="category-drop-down"
            />
        </StyledFlexWrapper>
    );
};

export default ProductCategoryChooser;
