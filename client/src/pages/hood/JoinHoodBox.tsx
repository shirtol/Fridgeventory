import Button from "../../components/button/Button";
import { StyledHoodLocation } from "../../components/hoodCard/styles/StyledHoodLocation";
import HoodLottie from "../../components/hoodLottie/HoodLottie";
import Title from "../../components/title/Title";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledJoinHoodBox } from "./styles/StyledJoinHoodBox";

interface JoinHoodBoxProps {
    isShown: boolean;
    hood: Hood;
}

const JoinHoodBox = ({ isShown, hood }: JoinHoodBoxProps) => {
    const { joinHood } = useHood();

    const onJoinHoodClicked = async () => {
        const data = await joinHood!(hood);
    };

    return (
        <>
            {
                <StyledJoinHoodBox>
                    {isShown && (
                        <>
                            <StyledHoodLocation>
                                {hood?.location}
                            </StyledHoodLocation>
                            <HoodLottie></HoodLottie>
                            <StyledHoodLocation>{`${hood.peopleIdsArr.length} neighbors joined`}</StyledHoodLocation>
                            <Button
                                buttonText="Join Hood"
                                onBtnClicked={onJoinHoodClicked}
                            ></Button>
                        </>
                    )}
                    {!isShown && (
                        <Title titleText="Select a hood and join"></Title>
                    )}
                </StyledJoinHoodBox>
            }
        </>
    );
};

export default JoinHoodBox;
