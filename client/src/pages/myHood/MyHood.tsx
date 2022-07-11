import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";

const MyHood = () => {
    return (
        <StyledMainWrapper>
            <StyledFlexWrapper
                alignItems="flex-start"
                justifyContent="flex-end"
                width="100%"
                justifySelf="flex-end"
            >
                <HoodProductsContainer></HoodProductsContainer>
                <NeighborsList></NeighborsList>
            </StyledFlexWrapper>
        </StyledMainWrapper>
    );
};

export default MyHood;
