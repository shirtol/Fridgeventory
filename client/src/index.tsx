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

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <TranslationProvider>
            <CookiesProvider>
                <UserProvider>
                    <ProductProvider>
                        <HoodProvider>
                            <App />
                        </HoodProvider>
                    </ProductProvider>
                </UserProvider>
            </CookiesProvider>
        </TranslationProvider>
    </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
