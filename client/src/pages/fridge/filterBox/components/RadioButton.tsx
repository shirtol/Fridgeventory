import React from "react";
import { StyledInput } from "../../../../components/input/styles/StyledInput";
import { useFilter, ExpiryOption, SortOption } from "../Filter.context";
import { StyledExpireInput } from "../styles/StyledExpireInput";

interface ExpiryRadioButtonProps {
    value: ExpiryOption | SortOption;
    lessThan?: number;
    setLessThan?: (days: number) => void;
    selectedValue: ExpiryOption | SortOption;
    setSelectedValue: (value: ExpiryOption | SortOption) => void;
}

const RadioButton = ({
    value,
    setLessThan,
    lessThan,
    setSelectedValue,
    selectedValue,
}: ExpiryRadioButtonProps) => {
    return (
        <label>
            <input
                type="radio"
                name="radio"
                checked={selectedValue === value}
                onChange={() => setSelectedValue!(value)}
            />
            <span>{value}</span>
            {setLessThan && selectedValue === value && (
                <StyledExpireInput
                    type="number"
                    value={lessThan?.toString()}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setLessThan(isNaN(value) ? 0 : value);
                    }}
                    min="0"
                ></StyledExpireInput>
            )}
        </label>
    );
};

export default RadioButton;
