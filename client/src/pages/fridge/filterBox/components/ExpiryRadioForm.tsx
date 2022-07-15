import React from "react";
import RadioButton from "./RadioButton";
import { useFilter } from "../Filter.context";
import "../styles/radioStyles.css";

const ExpiryRadioForm = () => {
    const { setLessThan, lessThan, expiryOption, setExpiryOption } =
        useFilter();
    return (
        <form>
            <RadioButton
                value="Expired"
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
            <RadioButton
                value="In 5 days"
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
            <RadioButton
                value="Less than"
                setLessThan={setLessThan}
                lessThan={lessThan}
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
            <RadioButton
                value="All"
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
        </form>
    );
};

export default ExpiryRadioForm;
