import React, { ReactNode } from "react";
import Button from "../../components/button/Button";
import { StyledHoodLocation } from "../../components/hoodCard/styles/StyledHoodLocation";
import HoodLottie from "../../components/hoodLottie/HoodLottie";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledJoinHoodBox } from "./styles/StyledJoinHoodBox";
import { StyledLocationInput } from "./styles/StyledLocationInput";

interface JoinHoodBoxProps {
    isShown: boolean;
    hood: Hood;
    onJoinHoodClicked: () => void;
}

const JoinHoodBox = ({
    isShown,
    hood,
    onJoinHoodClicked,
}: JoinHoodBoxProps) => {
    const onClick = () => {};
    return (
        <>
            {isShown && (
                <StyledJoinHoodBox>
                    <StyledHoodLocation>{hood?.location}</StyledHoodLocation>
                    <HoodLottie></HoodLottie>
                    <StyledHoodLocation>{`${hood.peopleIdsArr.length} neighbors joined`}</StyledHoodLocation>
                    <Button
                        buttonText="Join Hood"
                        onBtnClicked={onClick}
                    ></Button>
                </StyledJoinHoodBox>
            )}
        </>
    );
};

export default JoinHoodBox;
