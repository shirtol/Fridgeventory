import React, { ReactNode } from "react";
import Button from "../../components/button/Button";
import { StyledHoodLocation } from "../../components/hoodCard/styles/StyledHoodLocation";
import HoodLottie from "../../components/hoodLottie/HoodLottie";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledJoinHoodBox } from "./styles/StyledJoinHoodBox";
import { StyledLocationInput } from "./styles/StyledLocationInput";

interface JoinHoodBoxProps {
    isShown: boolean;
    hood: Hood;
}

const JoinHoodBox = ({ isShown, hood }: JoinHoodBoxProps) => {
    const { joinHood } = useHood();

    const onJoinHoodClicked = async () => {
        const myHood = await joinHood!(hood);
        console.log(myHood);
    };

    return (
        <>
            {isShown && (
                <StyledJoinHoodBox>
                    <StyledHoodLocation>{hood?.location}</StyledHoodLocation>
                    <HoodLottie></HoodLottie>
                    <StyledHoodLocation>{`${hood.peopleIdsArr.length} neighbors joined`}</StyledHoodLocation>
                    <Button
                        buttonText="Join Hood"
                        onBtnClicked={onJoinHoodClicked}
                    ></Button>
                </StyledJoinHoodBox>
            )}
        </>
    );
};

export default JoinHoodBox;
