import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainArea } from "../../components/layouts/StyledMainArea";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";

const MyHood = () => {
    return (
        <StyledMainArea>
            <StyledFlexWrapper
                alignItems="flex-start"
                justifyContent="flex-end"
                width="100%"
                justifySelf="flex-end"
            >
                <HoodProductsContainer></HoodProductsContainer>
                <NeighborsList></NeighborsList>
            </StyledFlexWrapper>
        </StyledMainArea>
    );
};

export default MyHood;
