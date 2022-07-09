import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { hoodsApi } from "../../apis/fridgeventoryApi";
import { useUser } from "../userContext/User.context";
import { Hood } from "./Hood.type";

interface HoodProviderProps {
    children: ReactNode;
}

interface HoodContextValue {
    allHoods: Hood[];
    fetchHoods: () => void;
    myHood: Hood;
    setMyHood: (hood: Hood) => void;
}

const HoodContext = React.createContext<Partial<HoodContextValue>>({});

export const useHoods = () => useContext(HoodContext);

export const HoodProvider = ({ children }: HoodProviderProps) => {
    const [allHoods, setAllHoods] = useState<Hood[]>([]);
    const { token } = useUser();
    const [myHood, setMyHood] = useState<Hood>();

    const fetchHoods = async () => {
        const { data } = await hoodsApi.get("/getAllHoods");
        setAllHoods(data);
        console.log(data);
    };

    const getMyHood = async () => {
        // const {data} = await
    };

    useEffect(() => {
        if (token) {
            getMyHood();
        }
    }, [token]);

    const value = { allHoods, fetchHoods, myHood, setMyHood };

    return (
        <HoodContext.Provider value={value}>{children}</HoodContext.Provider>
    );
};
