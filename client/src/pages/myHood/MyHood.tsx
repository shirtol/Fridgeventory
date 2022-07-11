import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";

const MyHood = () => {
    return (
        <StyledFlexWrapper
            alignItems="flex-start"
            justifyContent="flex-end"
            width="90%"
            justifySelf="flex-end"
        >
            <HoodProductsContainer></HoodProductsContainer>
            <NeighborsList></NeighborsList>
        </StyledFlexWrapper>
    );
};

export default MyHood;
