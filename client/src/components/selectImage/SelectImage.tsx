import React, { useEffect, useState } from "react";
import { StyledSelectImage } from "./styles/StyledSelectImage";

interface SelectImageProps {
    productImage: Blob;
    handleChange: (e: any) => void;
    inputLabel: string;
}
const SelectImage = ({ productImage, handleChange }: SelectImageProps) => {
    const onImageChange = (e: any) => {
        handleChange(e);
    };

    return (
        <StyledSelectImage
            id="productImage"
            type="file"
            onChange={onImageChange}
            required={false}
            capture="environment"
            accept="image/*"
        ></StyledSelectImage>
    );
};

export default SelectImage;
