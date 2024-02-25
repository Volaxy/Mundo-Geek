import React from "react";

import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";

export function App() {
    return (
        <React.Fragment>
            <Header />

            <main>
                <Banner />
            </main>
        </React.Fragment>
    );
}
