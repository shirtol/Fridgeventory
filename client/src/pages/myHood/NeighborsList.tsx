import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { useHood } from "../../context/hoodContext/Hood.context";
import UserItem from "./UserItem";

const NeighborsList = () => {
    const { myHood } = useHood();

    const renderAllNeighbors = () => {
        console.log(myHood);

        return myHood?.people?.map((user) => {
            return <UserItem user={user} key={user._id}></UserItem>;
        });
    };

    return (
        <StyledFlexWrapper
            flexDirection="column"
            width="max-content"
            justifyContent="flex-start"
            alignItems="flex-end"
            paddingTop="14rem"
            height="90vh"
            overflowY="scroll"
        >
            {renderAllNeighbors()}
        </StyledFlexWrapper>
    );
};

export default NeighborsList;
