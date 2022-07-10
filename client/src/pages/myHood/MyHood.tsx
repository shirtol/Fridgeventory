import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";

const MyHood = () => {
    return (
        <StyledFlexWrapper>
            <NeighborsList></NeighborsList>
            <HoodProductsContainer></HoodProductsContainer>
        </StyledFlexWrapper>
    );
};

export default MyHood;
