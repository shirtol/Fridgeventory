import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import { ReactPhotoCollage } from "react-photo-collage";
import { homePageImages } from "../../utils/stylesUtils/images";

const setting = {
    width: "600px",
    height: ["250px", "170px"],
    layout: [1, 4],
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
            source: `${homePageImages.food}`,
        },
    ],
    showNumOfRemainingPhotos: true,
};

const Home = () => {
    return (
        <StyledMainWrapper>
            <StyledFlexWrapper
                alignItems="center"
                justifyContent="center"
                paddingTop="8rem"
            >
                <ReactPhotoCollage {...setting} />
            </StyledFlexWrapper>
        </StyledMainWrapper>
    );
};

export default Home;
