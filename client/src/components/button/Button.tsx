import React from "react";
import { StyledButton } from "./styles/StyledButton";

interface ButtonProps {
    buttonText: string;
    onBtnClicked: () => void;
}

const Button = ({ buttonText, onBtnClicked }: ButtonProps) => {
    return <StyledButton onClick={onBtnClicked}>{buttonText}</StyledButton>;
};

export default Button;
