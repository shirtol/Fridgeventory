import React from "react";
import RadioButton from "./RadioButton";
import { useFilter } from "../Filter.context";
import "../styles/radioStyles.css";
import { useTranslation } from "../../../../context/translation/Translation.context";

const ExpiryRadioForm = () => {
    const { t } = useTranslation();

    const { setLessThan, lessThan, expiryOption, setExpiryOption } =
        useFilter();
    return (
        <form>
            <RadioButton
                value={t("modals.filter.expiry.expired")}
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
            <RadioButton
                value={t("modals.filter.expiry.in5Days")}
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
            <RadioButton
                value={t("modals.filter.expiry.lessThan")}
                setLessThan={setLessThan}
                lessThan={lessThan}
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
            <RadioButton
                value={t("modals.filter.expiry.all")}
                selectedValue={expiryOption!}
                //@ts-ignore
                setSelectedValue={setExpiryOption!}
            ></RadioButton>
        </form>
    );
};

export default ExpiryRadioForm;
