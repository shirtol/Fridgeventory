import React, { useEffect } from "react";
import { useUser } from "../../context/userContext/User.context";

const Logout = () => {
    const { logout } = useUser();

    useEffect(() => {
        const logoutUser = async () => {
            logout!();
        };

        logoutUser();
    }, []);

    return <div>Spinner</div>;
};

export default Logout;
