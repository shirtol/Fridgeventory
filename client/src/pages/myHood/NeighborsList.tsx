import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { useHood } from "../../context/hoodContext/Hood.context";
import UserItem from "./UserItem";

const NeighborsList = () => {
    const { myHood, usersInHood } = useHood();

    const renderAllNeighbors = () => {
        return usersInHood?.map((user) => {
            return <UserItem user={user} key={user._id}></UserItem>;
        });
    };

    return (
        <StyledFlexWrapper
            flexDirection="column"
            width="30%"
            justifyContent="flex-end"
            alignItems="flex-end"
            height="90vh"
        >
            {renderAllNeighbors()}
        </StyledFlexWrapper>
    );
};

export default NeighborsList;
