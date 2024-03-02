import styled from "styled-components";

import { Button } from "../components/Button/Button";
import { Product } from "../components/Category/Product/Product";
import { NavLink } from "react-router-dom";

const ProductsStyled = styled.section`
    background-color: var(--all-products-background-color);
    
    padding: 3rem 2rem;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

const AllProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

export function Products() {
    return (
        <ProductsStyled>
            <Header>
                <Title>Todos os Produtos</Title>
                <NavLink to="/new-product">
                    <Button
                        backgroundColor="var(--button-background-color)"
                        color="var(--white-text-color)"
                    >
                        Adicionar Produto
                    </Button>
                </NavLink>
            </Header>

            <AllProducts>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </AllProducts>
        </ProductsStyled>
    );
}
