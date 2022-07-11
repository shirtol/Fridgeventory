import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";

const MyHood = () => {
    return (
        <StyledFlexWrapper
            alignItems="flex-start"
            justifyContent="space-around"
        >
            <NeighborsList></NeighborsList>
            <HoodProductsContainer></HoodProductsContainer>
        </StyledFlexWrapper>
    );
};

export default MyHood;
