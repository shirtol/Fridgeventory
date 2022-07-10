import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { useHood } from "../../context/hoodContext/Hood.context";

const NeighborsList = () => {
    const { myHood } = useHood();

    // const renderAllNeighbors = () => {
    //     return myHood?.peopleIdsArr.map(() => {
    //         return;
    //     });
    // };

    return <StyledFlexWrapper>HIIII</StyledFlexWrapper>;
};

export default NeighborsList;
