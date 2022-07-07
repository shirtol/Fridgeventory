import React from "react";
import { StyledSelectImage } from "./styles/StyledSelectImage";

interface SelectImageProps {
    productImage: string;
    handleChange: (e: any) => void;
    inputLabel: string;
}
const SelectImage = ({ productImage, handleChange }: SelectImageProps) => {
    return (
        <StyledSelectImage
            id="productImage"
            type="file"
            value={productImage}
            onChange={handleChange}
            required={false}
        ></StyledSelectImage>
    );
};

export default SelectImage;
