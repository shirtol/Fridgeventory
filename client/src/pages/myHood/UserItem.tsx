import React from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import Title from "../../components/title/Title";
import { User } from "../../context/userContext/User.type";
import { AvatarsImages } from "../../utils/stylesUtils/images";
import { StyledUserIcon } from "./styles/StyledUserIcon";

interface UserItemProps {
    user: User;
}

const UserItem = ({ user }: UserItemProps) => {
    return (
        <StyledFlexWrapper
            cursor="pointer"
            width="max-content"
            paddingRight="3rem"
        >
            <Title titleText={user.name}></Title>
            <StyledUserIcon
                src={AvatarsImages.Hipster}
                alt="avatar"
            ></StyledUserIcon>
        </StyledFlexWrapper>
    );
};

export default UserItem;
