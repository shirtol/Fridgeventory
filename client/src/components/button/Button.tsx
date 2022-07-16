import React from "react";
import { StyledButton } from "./styles/StyledButton";

interface ButtonProps {
    buttonText: string;
    onBtnClicked: (param: any) => any;
    disable?: boolean;
}

const Button = ({ buttonText, onBtnClicked, disable }: ButtonProps) => {
    return (
        <StyledButton onClick={onBtnClicked} disabled={disable}>
            {buttonText}
        </StyledButton>
    );
};

export default Button;
