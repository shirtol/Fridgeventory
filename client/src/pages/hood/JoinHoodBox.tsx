import Button from "../../components/button/Button";
import { StyledHoodLocation } from "../../components/hoodCard/styles/StyledHoodLocation";
import HoodLottie from "../../components/hoodLottie/HoodLottie";
import Title from "../../components/title/Title";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { hoodImages } from "../../utils/stylesUtils/images";
import { StyledJoinHoodBox } from "./styles/StyledJoinHoodBox";
import { StyledLandHoodImage } from "./styles/StyledLandHoodImage";

interface JoinHoodBoxProps {
    isShown: boolean;
    hood: Hood;
}

const JoinHoodBox = ({ isShown, hood }: JoinHoodBoxProps) => {
    const { joinHood, myHood, setMyHood } = useHood();

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
                            <StyledHoodLocation>{`${hood.people.length} neighbors joined`}</StyledHoodLocation>
                            <Button
                                buttonText="Join Hood"
                                onBtnClicked={onJoinHoodClicked}
                            ></Button>
                        </>
                    )}
                    {!isShown && (
                        <>
                            <StyledLandHoodImage
                                src={hoodImages.hood}
                            ></StyledLandHoodImage>
                            <Title
                                titleText="Select a hood and join"
                                titleFontSize="2rem"
                            ></Title>
                        </>
                    )}
                </StyledJoinHoodBox>
            }
        </>
    );
};

export default JoinHoodBox;
