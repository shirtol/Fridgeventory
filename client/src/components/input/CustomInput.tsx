import React, { ChangeEvent, useState } from "react";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
import { StyledEye } from "./styles/StyledEye";
import { StyledInput } from "./styles/StyledInput";
import { StyledInputContainer } from "./styles/StyledInputContainer";
import { StyledLabel } from "./styles/StyledLabel";

interface CustomInputProps {
    id?: string;
    type?: string;
    value?: string | number;
    onChange: (e: any) => void;
    inputLabel: string;
    required: boolean;
    min?: string;
    inputWidth?: string;
    isPassword?: boolean;
    showPassword?: boolean;
    toggleShowPassword?: () => void;
}

const CustomInput = ({
    id,
    type,
    value,
    onChange,
    inputLabel,
    required,
    min,
    inputWidth,
    isPassword,
    showPassword,
    toggleShowPassword,
}: CustomInputProps) => {
    return (
        <StyledInputContainer>
            <StyledInput
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                required={required || false}
                min={min}
                width={inputWidth}
            />
            <StyledLabel htmlFor={id} isTransform={value}>
                {inputLabel}
            </StyledLabel>
            <StyledEye
                isPassword={isPassword}
                showPassword={showPassword}
                onClick={toggleShowPassword}
            ></StyledEye>
        </StyledInputContainer>
    );
};

export default CustomInput;
