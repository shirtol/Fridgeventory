import React from "react";
import { StyledCloseBtn } from "./styles/StyledCloseBtn";

interface CloseBtnProps {
    onClick: () => void;
}

const CloseBtn = ({ onClick }: CloseBtnProps) => {
    return (
        <StyledCloseBtn
            className="fa-solid fa-xmark"
            onClick={onClick}
        ></StyledCloseBtn>
    );
};

export default CloseBtn;
