import i18next from "i18next";
import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { useTranslation as useTranslate } from "react-i18next";
import common_en from "../../translations/en/common.json";
import common_he from "../../translations/he/common.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        en: {
            common: common_en,
        },
        he: {
            common: common_he,
        },
    },
    initImmediate: true,
});

interface TranslationProviderProps {
    children: ReactNode;
}

interface TranslationContextValue {
    chosenTranslation: string;
    setChosenTranslation: (translation: string) => void;
    t: any;
    i18n: any;
}

const TranslationContext = React.createContext<
    Partial<TranslationContextValue>
>({ chosenTranslation: "en" });

export const useTranslation = () => useContext(TranslationContext);

const TranslationProvider = ({ children }: TranslationProviderProps) => {
    const { t, i18n } = useTranslate("common");
    const [chosenTranslation, setChosenTranslation] = useState("en");

    const value: TranslationContextValue = {
        t,
        i18n,
        chosenTranslation,
        setChosenTranslation,
    };

    useEffect(() => {
        i18n.changeLanguage(chosenTranslation);
    }, [chosenTranslation]);

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationProvider;
