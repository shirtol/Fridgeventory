import React, { ChangeEvent, useState } from "react";
import { Colors } from "../../utils/stylesUtils/stylesConsts";
import { StyledInput } from "./StyledInput";

const CustomInput = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setInputValue(value);
    };

    return (
        <StyledInput
            color={Colors.greyInput}
            placeholder="search videos..."
            onChange={onInputChange}
            value={inputValue}
        ></StyledInput>
    );
};

export default CustomInput;
