import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fridgeventoryApi from "../../apis/fridgeventoryApi";
import { User } from "./User.type";
import { useCookies } from "react-cookie";

interface UserContextValue {
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
    const [token, setToken] = useState<string | undefined>();
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    useEffect(() => {
        if (cookies.token) {
            setToken(cookies.token);
        }
    }, []);

    const register = async (newUser: User) => {
        const { data } = await fridgeventoryApi.post("/user/register", {
            data: newUser,
        });
        setToken(data.token);
        setCookie("token", data.token);
        history.push("/");
    };

    const login = async (email: string, password: string) => {
        const { data } = await fridgeventoryApi.post("/user/login", {
            data: { email, password },
        });

        setToken(data.token);
        setCookie("token", data.token);
        history.push("/");
    };

    const logout = async () => {
        await fridgeventoryApi.post(
            "auth/user/logout",
            {},
            {
                headers: {
                    Authorization: token!,
                },
            }
        );
        removeCookie("token");
        setToken("");
        history.push("/");
    };

    const value: UserContextValue = {
        token,
        register,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
