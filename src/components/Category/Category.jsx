import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";

import { Product } from "./Product/Product";
import { NavLink } from "react-router-dom";

const CategoryWraper = styled.article`
    padding: 1rem;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
`;

const ViewAll = styled.button`
    background-color: transparent;
    
    display: flex;
    gap: 0.5rem;

    border: none;

    color: var(--view-all-products-text-color);
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
            <Header>
                <Title>Star Wars</Title>

                <NavLink to="/products">
                    <ViewAll>
                        Ver tudo
                        <GoArrowRight style={{ color: "var(--view-all-products-text-color)" }} />
                    </ViewAll>
                </NavLink>
            </Header>

            <Products>
                <Product />
                <Product />
                <Product />
            </Products>
        </CategoryWraper>
    );
}
