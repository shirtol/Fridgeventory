import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainArea } from "../../components/layouts/StyledMainArea";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import { Hood } from "../../context/hoodContext/Hood.type";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";

interface MyHoodProps {
    hood: Hood;
}

const MyHood = ({ hood }: MyHoodProps) => {
    return (
        <StyledFlexWrapper
            alignItems="flex-start"
            justifyContent="space-between"
            justifySelf="flex-end"
        >
            <HoodProductsContainer hood={hood}></HoodProductsContainer>
            <NeighborsList></NeighborsList>
        </StyledFlexWrapper>
    );
};

export default MyHood;
