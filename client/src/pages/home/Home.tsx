import HoodFeed from "../../components/hoodFeed/HoodFeed";
import ShoppingListHome from "../../components/shoppingListHome/ShoppingListHome";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductsCarousel from "../../components/productsCarousel/ProductsCarousel";
import { StyledHomePageBox } from "./styles/StyledHomePageBox";
import { StyledBackground } from "../../components/layouts/StyledBackground";
import { StyledSlogan } from "../../components/slogan/StyledSlogan";
import HouseSpinner from "../../components/spinner/HouseSpinner";

const Home = () => {
    return (
        <>
            {/* <StyledSlogan>More Food? Share It!</StyledSlogan> */}
            {/* <StyledMainWrapper>
                <StyledFlexWrapper
                    height="80vh"
                    justifyContent="space-around"
                    gap="0"
                >
                    <StyledHomePageBox width="20%" height="70vh">
                        <ShoppingListHome></ShoppingListHome>
                    </StyledHomePageBox>
                    <StyledFlexWrapper flexDirection="column" width="70%">
                        <StyledHomePageBox width="80%" height="45vh">
                            <HoodFeed></HoodFeed>
                        </StyledHomePageBox>
                        <StyledHomePageBox width="80%" height="20vh">
                            <ProductsCarousel></ProductsCarousel>
                        </StyledHomePageBox>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
            </StyledMainWrapper> */}
        </>
    );
};

export default Home;
