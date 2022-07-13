import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { authHoodsApi, hoodsApi } from "../../apis/fridgeventoryApi";
import Product, { parseProduct } from "../productContext/Product.types";
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
    usersInHood: User[];
    productsInHood: Product[];
    setProductsInHood: (products: Product[]) => void;
    getMyHood: (hoodId: string) => Promise<void>;
}

const HoodContext = React.createContext<Partial<HoodContextValue>>({});

export const useHood = () => useContext(HoodContext);

export const HoodProvider = ({ children }: HoodProviderProps) => {
    const [allHoods, setAllHoods] = useState<Hood[]>([]);
    const { token, currUser } = useUser();
    const [myHood, setMyHood] = useState<Hood>();
    const [usersInHood, setUsersInHood] = useState<User[]>([]);
    const [productsInHood, setProductsInHood] = useState<Product[]>([]);

    const fetchHoods = async () => {
        try {
            const { data } = await hoodsApi.get("/getAllHoods");
            setAllHoods(data);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    const getMyHood = async (hoodId: string) => {
        try {
            const { data } = await authHoodsApi.get(`/getMyHood/${hoodId}`, {
                headers: {
                    Authorization: token!,
                },
            });
            data.populatedHood.availableProducts =
                data.populatedHood.availableProducts.map(parseProduct);
            setMyHood(data.populatedHood);
            setUsersInHood(data.usersInHood);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    const joinHood = async (hood: Hood) => {
        try {
            const { data } = await authHoodsApi.put("/joinHood", hood, {
                headers: {
                    Authorization: token!,
                },
            });
            data.hood.availableProducts =
                data.hood.availableProducts.map(parseProduct);
            setMyHood(data.hood);
            setUsersInHood(data.usersInHood);
            return data;
        } catch (err: any) {
            console.log(err.message);
        }
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
        usersInHood,
        productsInHood,
        setProductsInHood,
        getMyHood,
    };

    return (
        <HoodContext.Provider value={value}>{children}</HoodContext.Provider>
    );
};
