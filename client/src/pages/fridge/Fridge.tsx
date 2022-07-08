import React, { useState } from "react";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import AddProductModal from "./AddProductModal";
import { StyledAddBtn } from "./styles/StyledAddBtn";

const Fridge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    return (
        <StyledMainWrapper>
            <AddProductModal
                isShown={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
            ></AddProductModal>
            <ProductCard
                productName="banana"
                productImgSrc=""
                productAmount={5}
                productExpiry="5 days"
            ></ProductCard>
            <StyledAddBtn
                className="fa-solid fa-circle-plus fa-3x"
                onClick={onAddBtnClicked}
            ></StyledAddBtn>
        </StyledMainWrapper>
    );
};

export default Fridge;
