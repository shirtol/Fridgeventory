import React from "react";
import Lottie from "lottie-react";
import "./styles/hoodLottieStyles.css";

import hood from "../../assets/animations/hood2.json";

const HoodLottie = () => {
    return (
        <Lottie
            className="lottie-hood"
            animationData={hood}
            loop={false}
        ></Lottie>
    );
};

export default HoodLottie;
