import styled from "styled-components";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";

import { Product } from "./Product/Product";

const CategoryWraper = styled.article`
    
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

    cursor: pointer;
`;

const Products = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit);
    gap: 1rem;

    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

export function Category({ name, products }) {
    return (
        <CategoryWraper>
            <Header>
                <Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Title>

                <Link to="/products">
                    <ViewAll>
                        Ver tudo
                        <GoArrowRight style={{ color: "var(--view-all-products-text-color)" }} />
                    </ViewAll>
                </Link>
            </Header>

            <Products>
                {products.map(product => {
                    return (
                        <Product
                            key={product._id}
                            id={product._id}
                            urlImage={product.url}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        />
                    );
                })}
            </Products>
        </CategoryWraper>
    );
}
