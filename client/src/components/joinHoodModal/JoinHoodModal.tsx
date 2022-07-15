import React from "react";
import { StyledModal } from "../layouts/StyledModal";
import { StyledModalWrapper } from "../layouts/StyledModalWrapper";
import { StyledJoinHoodModal } from "./styles/StyledJoinHoodModal";

interface JoinHoodModalProps {
    isHoodClicked: boolean;
    closeModal: () => void;
}

const JoinHoodModal = ({ isHoodClicked, closeModal }: JoinHoodModalProps) => {
    return (
        <StyledJoinHoodModal>
            {isHoodClicked && (
                <StyledModalWrapper onClick={closeModal} isAbove={true}>
                    <StyledModal
                        height="45%"
                        width="40%"
                        justifyContent="flex-start"
                        onClick={(e) => e.stopPropagation()}
                    ></StyledModal>
                </StyledModalWrapper>
            )}
        </StyledJoinHoodModal>
    );
};

export default JoinHoodModal;
