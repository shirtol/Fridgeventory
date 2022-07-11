import React from "react";
import Lottie from "lottie-react";
import "./styles/houseSpinnerStyles.css";

import houseSpinner from "../../assets/animations/house.json";

interface HouseSpinnerProps {
    isShown: boolean;
}

const HouseSpinner = ({ isShown }: HouseSpinnerProps) => {
    return (
        <>
            {isShown && (
                <Lottie
                    className="lottie-house-spinner"
                    animationData={houseSpinner}
                    loop
                ></Lottie>
            )}
        </>
    );
};

export default HouseSpinner;
