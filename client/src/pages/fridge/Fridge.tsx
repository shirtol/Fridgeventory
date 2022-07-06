import React, { useState } from "react";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import AddProductModal from "./AddProductModal";
import { StyledAddBtn } from "./styles/StyledAddBtn";

const Fridge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    return (
        <StyledMainWrapper>
            <AddProductModal isShown={isModalOpen}></AddProductModal>
            <StyledAddBtn
                className="fa-solid fa-circle-plus fa-3x"
                onClick={onAddBtnClicked}
            ></StyledAddBtn>
        </StyledMainWrapper>
    );
};

export default Fridge;
