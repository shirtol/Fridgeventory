import React from "react";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import Button from "../button/Button";
import { StyledHoodLocation } from "../hoodCard/styles/StyledHoodLocation";
import HoodLottie from "../hoodLottie/HoodLottie";
import { StyledModal } from "../layouts/StyledModal";
import { StyledModalWrapper } from "../layouts/StyledModalWrapper";
import { StyledJoinHoodModal } from "./styles/StyledJoinHoodModal";

interface JoinHoodModalProps {
    isHoodClicked: boolean;
    closeModal: () => void;
    hood: Hood;
}

const JoinHoodModal = ({
    isHoodClicked,
    closeModal,
    hood,
}: JoinHoodModalProps) => {
    const { joinHood } = useHood();

    const onJoinHoodClicked = async () => {
        await joinHood!(hood);
    };

    return (
        <StyledJoinHoodModal>
            {isHoodClicked && (
                <StyledModalWrapper onClick={closeModal} isAbove={true}>
                    <StyledModal
                        height="45%"
                        width="40%"
                        justifyContent="flex-start"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StyledHoodLocation>
                            {hood?.location}
                        </StyledHoodLocation>
                        <HoodLottie></HoodLottie>
                        <StyledHoodLocation>{`${hood.people.length} neighbors joined`}</StyledHoodLocation>
                        <Button
                            buttonText="Join Hood"
                            onBtnClicked={onJoinHoodClicked}
                        ></Button>
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </StyledJoinHoodModal>
    );
};

export default JoinHoodModal;
