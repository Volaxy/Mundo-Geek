import styled from "styled-components";
import { Product } from "./Product/Product";

const CategoryWraper = styled.article`
    padding: 1rem;
`;

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
`;

const Products = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit);
    gap: 1rem;

    margin-top: 1rem;
`;

export function Category() {
    return (
        <CategoryWraper>
            <header>
                <Title>Star Wars</Title>
            </header>

            <Products>
                <Product />
                <Product />
                <Product />
            </Products>
        </CategoryWraper>
    );
}
