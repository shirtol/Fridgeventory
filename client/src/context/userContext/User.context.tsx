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
    currUser?: User;
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
    const [currUser, setCurrUser] = useState<User>();

    useEffect(() => {
        if (cookies.token) {
            setToken(cookies.token);
            getUser(cookies.token);
        }
    }, []);

    const getUser = async (currToken: string) => {
        const { data } = await fridgeventoryApi.get(
            "/auth/user/getUserDetails",
            {
                headers: {
                    Authorization: currToken,
                },
            }
        );
        setCurrUser(data);
        return data;
    };

    const register = async (newUser: User) => {
        newUser.email = newUser.email.toLowerCase();
        const { data } = await fridgeventoryApi.post("/user/register", {
            data: newUser,
        });
        setToken(data.token);
        setCookie("token", data.token);
        setCurrUser(data);
        history.push("/");
    };

    const login = async (email: string, password: string) => {
        const loweredCaseEmail = email.toLowerCase();
        const { data } = await fridgeventoryApi.post("/user/login", {
            data: { email: loweredCaseEmail, password },
        });
        console.log(data);

        setToken(data.token);
        setCookie("token", data.token);
        setCurrUser(data.user);
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
        setCurrUser(undefined);
        history.push("/");
    };

    const value: UserContextValue = {
        token,
        register,
        login,
        logout,
        currUser,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
