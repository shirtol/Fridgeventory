import React from "react";
import RadioButton from "./RadioButton";
import { useFilter } from "../Filter.context";
import "../styles/radioStyles.css";
import { useTranslation } from "../../../../context/translation/Translation.context";

const SortByForm = () => {
    const { t } = useTranslation();
    const { sortBy, setSortBy } = useFilter();
    return (
        <form>
            <RadioButton
                value={t("modals.filter.sort.name")}
                selectedValue={sortBy!}
                //@ts-ignore
                setSelectedValue={setSortBy!}
            ></RadioButton>
            <RadioButton
                value={t("modals.filter.sort.expiry")}
                selectedValue={sortBy!}
                //@ts-ignore
                setSelectedValue={setSortBy!}
            ></RadioButton>
            <RadioButton
                value={t("modals.filter.sort.category")}
                selectedValue={sortBy!}
                //@ts-ignore
                setSelectedValue={setSortBy!}
            ></RadioButton>
        </form>
    );
};

export default SortByForm;
