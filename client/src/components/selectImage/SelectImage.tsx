import React, { useEffect, useState } from "react";
import { StyledCameraIcon } from "../../pages/fridge/styles/StyledCameraIcon";
import Button from "../button/Button";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import { StyledProductImg } from "../productCard/styles/StyledProductImg";
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

    let fileInput: HTMLElement | null;

    return (
        <StyledFlexWrapper flexDirection="column">
            <StyledSelectImage
                id="productImage"
                type="file"
                onChange={onImageChange}
                required={false}
                capture="environment"
                accept="image/*"
                ref={(fp) => (fileInput = fp)}
            ></StyledSelectImage>
            <StyledCameraIcon
                onClick={() => fileInput?.click()}
                className="fa-solid fa-camera fa-2x"
            ></StyledCameraIcon>
            {productImage?.size > 0 && (
                <StyledProductImg
                    id="preview"
                    src={URL.createObjectURL(productImage)}
                    alt="preview"
                ></StyledProductImg>
            )}
        </StyledFlexWrapper>
    );
};

export default SelectImage;
