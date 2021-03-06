/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { authHoodsApi, hoodsApi } from "../../apis/fridgeventoryApi";
import { useProduct } from "../productContext/Product.context";
import { parseProduct } from "../productContext/Product.types";
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
    joinHood: (hood: Hood) => Promise<void>;
    getMyHood: (hoodId: string) => Promise<void>;
}

const HoodContext = React.createContext<Partial<HoodContextValue>>({});

export const useHood = () => useContext(HoodContext);

export const HoodProvider = ({ children }: HoodProviderProps) => {
    const [allHoods, setAllHoods] = useState<Hood[]>([]);
    const { token, currUser } = useUser();
    const [myHood, setMyHood] = useState<Hood>();
    const { allProducts } = useProduct();

    const fetchHoods = async () => {
        try {
            const { data } = await hoodsApi.get("/getAllHoods");
            setAllHoods(data);
        } catch (err: any) {
            console.error(err.message);
        }
    };

    const getMyHood = async (hoodId: string) => {
        try {
            const { data } = await authHoodsApi.get(`/getMyHood/${hoodId}`, {
                headers: {
                    Authorization: token!,
                },
            });

            data.availableProducts = data.availableProducts.map(parseProduct);
            setMyHood(data);
        } catch (err: any) {
            console.error(err.message);
        }
    };

    const joinHood = async (hood: Hood) => {
        try {
            const { data } = await authHoodsApi.put("/joinHood", hood, {
                headers: {
                    Authorization: token!,
                },
            });

            data.availableProducts = data.availableProducts.map(parseProduct);
            setMyHood(data);
            return data;
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        if (currUser?.hoods?.length) {
            const hoodId = currUser?.hoods[0];
            getMyHood(hoodId as string);
        }
        if (!currUser) setMyHood(undefined);
    }, [currUser]);

    useEffect(() => {
        if (myHood) {
            getMyHood(myHood._id);
        }
    }, [allProducts]);

    const value = {
        allHoods,
        fetchHoods,
        myHood,
        setMyHood,
        joinHood,
        getMyHood,
    };

    return (
        <HoodContext.Provider value={value}>{children}</HoodContext.Provider>
    );
};
