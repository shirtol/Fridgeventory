import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import { ReactPhotoCollage } from "react-photo-collage";
import { homePageImages } from "../../utils/stylesUtils/images";
import Welcome from "./Welcome";

const setting = {
    width: "70%",
    height: ["25rem", "17rem"],
    layout: [2, 3],
    photos: [
        {
            source: `${homePageImages.food}`,
        },
        {
            source: `${homePageImages.eat}`,
        },
        {
            source: `${homePageImages.people}`,
        },
        {
            source: `${homePageImages.houses}`,
        },
        {
            source: `${homePageImages.neighborhood}`,
        },
        {
            source: `${homePageImages.vik}`,
        },
    ],
    showNumOfRemainingPhotos: true,
};

const Home = () => {
    return (
        <StyledMainWrapper alignItems="center">
            <StyledFlexWrapper
                alignItems="center"
                justifyContent="center"
                paddingTop="2rem"
                // flexDirection="column"
            >
                <ReactPhotoCollage {...setting} />
                <Welcome></Welcome>
            </StyledFlexWrapper>
        </StyledMainWrapper>
    );
};

export default Home;
