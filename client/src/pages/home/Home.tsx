import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import { ReactPhotoCollage } from "react-photo-collage";
import { homePageImages } from "../../utils/stylesUtils/images";
import Welcome from "./Welcome";

const Home = () => {
    const setting = {
        width: "70%",
        height:
            window.innerWidth < 772 ? ["20rem", "13rem"] : ["25rem", "17rem"],
        layout: window.innerWidth < 772 ? [1, 2] : [2, 3],
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

    return (
        <StyledMainWrapper alignItems="center">
            <StyledFlexWrapper
                alignItems="center"
                justifyContent="center"
                paddingTop="2rem"
                flexDirectionTablet="column"
            >
                <ReactPhotoCollage {...setting} />
                <Welcome></Welcome>
            </StyledFlexWrapper>
        </StyledMainWrapper>
    );
};

export default Home;
