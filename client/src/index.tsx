import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts/regular.otf";
import "./assets/fonts/GraphikMedium.ttf";
import { UserProvider } from "./context/userContext/User.context";
import TranslationProvider from "./context/translation/Translation.context";
import { ProductProvider } from "./context/productContext/Product.context";
import { CookiesProvider } from "react-cookie";
import { HoodProvider } from "./context/hoodContext/Hood.context";
import { FilterProvider } from "./pages/fridge/filterBox/Filter.context";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <TranslationProvider>
            <BrowserRouter>
                <CookiesProvider>
                    <UserProvider>
                        <ProductProvider>
                            <HoodProvider>
                                <FilterProvider>
                                    <App />
                                </FilterProvider>
                            </HoodProvider>
                        </ProductProvider>
                    </UserProvider>
                </CookiesProvider>
            </BrowserRouter>
        </TranslationProvider>
        {/* // </React.StrictMode> */}
    </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
