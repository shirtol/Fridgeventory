import React, { useEffect, useState } from "react";
import HouseSpinner from "../../components/spinner/HouseSpinner";
import { useUser } from "../../context/userContext/User.context";

const Logout = () => {
    const { logout } = useUser();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const logoutUser = async () => {
            try {
                await logout!();
            } catch (err) {
                console.error(err);
            }

            setIsLoading(false);
        };

        logoutUser();
    }, []);

    return <HouseSpinner isShown={isLoading} />;
};

export default Logout;
