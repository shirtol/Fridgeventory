import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { authHoodsApi, hoodsApi } from "../../apis/fridgeventoryApi";
import { useUser } from "../userContext/User.context";
import { User } from "../userContext/User.type";
import { Hood } from "./Hood.type";

interface HoodProviderProps {
    children: ReactNode;
}

interface HoodContextValue {
    allHoods: Hood[];
    fetchHoods: () => void;
    myHood: Hood;
    setMyHood: (hood: Hood) => void;
    joinHood: (hood: Hood) => Promise<void>;
}

const HoodContext = React.createContext<Partial<HoodContextValue>>({});

export const useHood = () => useContext(HoodContext);

export const HoodProvider = ({ children }: HoodProviderProps) => {
    const [allHoods, setAllHoods] = useState<Hood[]>([]);
    const { token, currUser } = useUser();
    const [myHood, setMyHood] = useState<Hood>();
    const [usersInHood, setUsersInHood] = useState<User[]>([]);

    const fetchHoods = async () => {
        const { data } = await hoodsApi.get("/getAllHoods");
        setAllHoods(data);
    };

    const getMyHood = async (hoodId: string) => {
        const { data } = await authHoodsApi.get(`/getMyHood/${hoodId}`, {
            headers: {
                Authorization: token!,
            },
        });
        setMyHood(data.hood);
        setUsersInHood(data.usersInHood);
    };

    const joinHood = async (hood: Hood) => {
        const { data } = await authHoodsApi.put("/joinHood", hood, {
            headers: {
                Authorization: token!,
            },
        });
        console.log(data);
        setMyHood(data.hood);
        setUsersInHood(data.usersInHood);
        return data;
    };

    useEffect(() => {
        if (currUser?.hoods?.length && currUser?.hoods?.length > 0) {
            const hoodId = currUser?.hoods[0];
            getMyHood(hoodId as string);
        }
        if (!currUser) setMyHood(undefined);
    }, [currUser]);

    const value = {
        allHoods,
        fetchHoods,
        myHood,
        setMyHood,
        joinHood,
    };

    return (
        <HoodContext.Provider value={value}>{children}</HoodContext.Provider>
    );
};
