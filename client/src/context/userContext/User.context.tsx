import React, { ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import fridgeventoryApi from "../../apis/fridgeventoryApi";
import { User } from "./User.type";

interface UserContextValue {
    currentUser?: User;
    token?: string;
    register?: (newUser: User, isConfirmed: boolean) => Promise<void>;
}

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = React.createContext<UserContextValue>({});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState();
    const [token, setToken] = useState();
    // const [error, setError] = useState("");
    const history = useHistory();

    const register = async (newUser: User, isConfirmed: boolean) => {
        // if (!isConfirmed) return setError("Passwords do NOT match");
        // if (newUser.password.length < 8)
        //     return setError(
        //         "Invalid password. Password length must be at least 8 characters"
        //     );
        try {
            const { data } = await fridgeventoryApi.post("/user/register", {
                data: newUser,
            });
            setCurrentUser(data.user);
            setToken(data.token);
            localStorage.setItem("Token", data.token);
            // setError("");
            history.push("/");
        } catch (err: any) {
            console.log({ message: err.message });
        }
    };

    const value: UserContextValue = {
        currentUser,
        register,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
