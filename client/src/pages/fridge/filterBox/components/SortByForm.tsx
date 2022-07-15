import React from "react";
import RadioButton from "./RadioButton";
import { useFilter } from "../Filter.context";
import "../styles/radioStyles.css";

const SortByForm = () => {
    const { sortBy, setSortBy } = useFilter();
    return (
        <form>
            <RadioButton
                value="Name"
                selectedValue={sortBy!}
                //@ts-ignore
                setSelectedValue={setSortBy!}
            ></RadioButton>
            <RadioButton
                value="Expiry"
                selectedValue={sortBy!}
                //@ts-ignore
                setSelectedValue={setSortBy!}
            ></RadioButton>
            <RadioButton
                value="Category"
                selectedValue={sortBy!}
                //@ts-ignore
                setSelectedValue={setSortBy!}
            ></RadioButton>
        </form>
    );
};

export default SortByForm;
