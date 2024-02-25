import React from "react";
import ReactDOM from "react-dom/client";

import 'reset-css';
import 'normalize.css';

import { App } from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*============================== Configurations ==============================*/
    :root {
        /*=============== COLORS ===============*/
        --tundora-color: hsl(0, 0%, 27%);
        --white-color: hsl(0, 0%, 100%);
        --royal-blue-color: hsl(214, 77.5%, 52%);


        /*=============== BACKGROUNDS ===============*/
        --button-background-color: var(--royal-blue-color);
    
        /*=============== BORDERS ===============*/
        --button-border-color: var(--royal-blue-color);
    
        /*=============== TEXT COLORS ===============*/
        --button-text-color: var(--royal-blue-color);
        --white-text-color: var(--white-color);
        --product-title-text-color: var(--tundora-color);
        --view-product-text-color: var(--royal-blue-color);

        /*=============== FONTS ===============*/
        --default-font: "Raleway", "Arial" , "Helvetica", sans-serif;
    }
    
    /*============================== GENERIC ELEMENTS ==============================*/
    html,
    body {
        font-family: var(--default-font);
        font-size: 16px;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle />

        <App />
    </React.StrictMode>,
);
