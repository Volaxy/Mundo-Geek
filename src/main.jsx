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
        --royal-blue-color: hsl(214, 77.5%, 52%);


        /*=============== BACKGROUNDS ===============*/
    
    
        /*=============== BORDERS ===============*/
        --button-border-color: var(--royal-blue-color);
    
        /*=============== TEXT COLORS ===============*/
        --button-text-color: var(--royal-blue-color);

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
