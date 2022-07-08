import React, { ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import fridgeventoryApi from "../../apis/fridgeventoryApi";
import { User } from "./User.type";

interface UserContextValue {
    currentUser?: User;
    token?: string;
    register?: (newUser: User) => Promise<void>;
    login?: (email: string, password: string) => Promise<void>;
    logout?: () => Promise<void>;
}

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = React.createContext<UserContextValue>({});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User>();
    const [token, setToken] = useState<string>("");
    const history = useHistory();

    const register = async (newUser: User) => {
        const { data } = await fridgeventoryApi.post("/user/register", {
            data: newUser,
        });
        setCurrentUser(data.user);
        setToken(data.token);
        localStorage.setItem("Token", data.token);
        history.push("/");
    };

    const login = async (email: string, password: string) => {
        const { data } = await fridgeventoryApi.post("/user/login", {
            data: { email, password },
        });
        setCurrentUser(data.user);
        setToken(data.token);
        localStorage.setItem("Token", data.token);
        history.push("/");
    };

    const logout = async () => {
        await fridgeventoryApi.post(
            "auth/user/logout",
            {},
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        setCurrentUser(undefined);
        setToken("");
        history.push("/");
    };

    const value: UserContextValue = {
        currentUser,
        register,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
