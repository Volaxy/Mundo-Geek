import styled from "styled-components";

import { Banner } from "../components/Banner/Banner";
import { Category } from "../components/Category/Category";
import { getCategoryByName } from "../services/categoryService";
import { useEffect, useState } from "react";

const ProductsStyled = styled.section`
    background-color: var(--products-background-color);
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem var(--padding-left-right);

    @media screen and (min-width: 768px) {
        padding-top: 1.5rem;
    }

    @media screen and (min-width: 1280px) {
        padding: 4rem var(--padding-left-right);
    }
`;

export function Index() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        const categories = await getCategoryByName("consoles");

        setCategories(categories);
    }

    return (
        <main>
            <Banner />

            <ProductsStyled>
                {categories.map(category => {
                    return (
                        category.products.length > 0 &&
                        <Category
                            key={category._id}
                            name={category.name}
                            products={category.products}
                        />
                    );
                })}
            </ProductsStyled>
        </main>
    );
}
