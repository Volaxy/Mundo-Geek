import styled from "styled-components";

import { Banner } from "../components/Banner/Banner";
import { Category } from "../components/Category/Category";

const ProductsStyled = styled.section`
    background-color: var(--products-background-color);
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        padding-top: 1.5rem;
    }

    @media screen and (min-width: 1280px) {
        padding: 4rem 7.5rem;
    }
`;

export function Index() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Use backendUrl para formar a URL completa
    fetch(`${backendUrl}/products`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    return (
        <main>
            <Banner />

            <ProductsStyled>
                <Category />
                <Category />
                <Category />
            </ProductsStyled>
        </main>
    );
}
