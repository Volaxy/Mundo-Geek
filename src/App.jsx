import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Category } from "./components/Category/Category";
import { Footer } from "./components/Footer/Footer";

const ProductsStyled = styled.section`
    background-color: var(--products-background-color);
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export function App() {
    return (
        <React.Fragment>
            <Header />

            <main>
                <Banner />

                <ProductsStyled>
                    <Category />
                    <Category />
                    <Category />
                </ProductsStyled>
            </main>

            <Footer />
        </React.Fragment>
    );
}
