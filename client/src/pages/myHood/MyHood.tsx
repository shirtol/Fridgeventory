import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { Hood } from "../../context/hoodContext/Hood.type";
import HoodProductsContainer from "./HoodProductsContainer";
import NeighborsList from "./NeighborsList";
import { useWindowWidth } from "@react-hook/window-size";

interface MyHoodProps {
    hood: Hood;
}

const MyHood = ({ hood }: MyHoodProps) => {
    const width = useWindowWidth();

    return (
        <StyledFlexWrapper
            alignItems="flex-start"
            justifyContent="space-between"
            justifySelf="center"
            justifyContentTablet="center"
        >
            <HoodProductsContainer />
            {width > 1024 && <NeighborsList />}
        </StyledFlexWrapper>
    );
};

export default MyHood;
