import React, { ReactNode, useState } from "react";
import { useContext } from "react";
import { categoryOptions } from "../../../utils/products/consts";

interface FilterProviderProps {
    children: ReactNode;
}

interface FilterContextValue {
    expiryOption: ExpiryOption;
    setExpiryOption: (expiryOption: ExpiryOption) => void;
    lessThan: number;
    setLessThan: (days: number) => void;
    selectedCategories: string[];
    updateSelectedCategories: (category: string) => void;
    sortBy: SortOption;
    setSortBy: (sortBy: SortOption) => void;
}

export type ExpiryOption = "Expired" | "In 5 days" | "Less than" | "All";

export type SortOption = "Expiry" | "Name" | "Category";

const FilterContext = React.createContext<Partial<FilterContextValue>>({});

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [expiryOption, setExpiryOption] = useState<ExpiryOption>("All");
    const [lessThan, setLessThan] = useState<number>(0);
    const [sortBy, setSortBy] = useState<SortOption>("Name");

    const updateSelectedCategories = (clickedCategory: string) => {
        if (!selectedCategories.includes(clickedCategory)) {
            setSelectedCategories([...selectedCategories, clickedCategory]);
        } else {
            setSelectedCategories(
                selectedCategories.filter(
                    (category) => category !== clickedCategory
                )
            );
        }
    };

    const value = {
        expiryOption,
        setExpiryOption,
        lessThan,
        setLessThan,
        selectedCategories,
        updateSelectedCategories,
        sortBy,
        setSortBy,
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};
