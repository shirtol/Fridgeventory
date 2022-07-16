import React from "react";
import Button from "../../../components/button/Button";
import { StyledFlexWrapper } from "../../../components/layouts/StyledFlexWrapper";
import { StyledModal } from "../../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../../components/layouts/StyledModalWrapper";
import Title from "../../../components/title/Title";

interface DeleteProductModalProps {
    isShown: boolean;
    closeModal: () => void;
    onDeleteApproved: (productId: string) => Promise<void>;
}

const DeleteProductModal = ({
    isShown,
    closeModal,
    onDeleteApproved,
}: DeleteProductModalProps) => {
    return (
        <>
            {isShown && (
                <StyledModalWrapper onClick={closeModal} isAbove={true}>
                    <StyledModal
                        height="45%"
                        width="40%"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StyledFlexWrapper
                            flexDirection="column"
                            height="100%"
                            justifyContent="space-around"
                        >
                            <Title
                                titleText="Are you sure you want to delete this product?"
                                titleFontSize="2rem"
                            ></Title>
                            <StyledFlexWrapper>
                                <Button
                                    buttonText="Cancel"
                                    onBtnClicked={closeModal}
                                ></Button>
                                <Button
                                    buttonText="OK"
                                    onBtnClicked={onDeleteApproved}
                                ></Button>
                            </StyledFlexWrapper>
                        </StyledFlexWrapper>
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default DeleteProductModal;
