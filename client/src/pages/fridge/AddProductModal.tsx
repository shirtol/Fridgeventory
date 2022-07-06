import React from "react";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";

interface AddProductModalProps {
    isShown: boolean;
}

const AddProductModal = ({ isShown }: AddProductModalProps) => {
    return (
        <>
            {isShown && (
                <StyledModalWrapper>
                    <StyledModal></StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default AddProductModal;
