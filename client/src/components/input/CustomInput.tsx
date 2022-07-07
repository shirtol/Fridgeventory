import React, { ChangeEvent, useState } from "react";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
import { StyledInput } from "./styles/StyledInput";
import { StyledInputContainer } from "./styles/StyledInputContainer";
import { StyledLabel } from "./styles/StyledLabel";

interface CustomInputProps {
    id: string;
    type?: string;
    value: string | number;
    onChange: (e: any) => void;
    inputLabel: string;
    required: boolean;
    min?: string;
}

const CustomInput = ({
    id,
    type,
    value,
    onChange,
    inputLabel,
    required,
    min,
}: CustomInputProps) => {
    // const [inputValue, setInputValue] = useState<string>("");

    // const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //     const { value } = target;
    //     setInputValue(value);
    // };

    return (
        <StyledInputContainer>
            <StyledInput
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                required={required || false}
                min={min}
            />
            <StyledLabel htmlFor={id} isTransform={value}>
                {inputLabel}
            </StyledLabel>
        </StyledInputContainer>
        // <StyledInput
        //     color={Colors.greyInput}
        //     placeholder={placeHolder}
        //     onChange={onInputChange}
        //     value={inputValue}
        // ></StyledInput>
    );
};

export default CustomInput;
