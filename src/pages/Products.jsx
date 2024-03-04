import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../components/Button/Button";
import { Product } from "../components/Category/Product/Product";
import { getProducts } from "../services/productService";

const ProductsStyled = styled.section`
    background-color: var(--all-products-background-color);
    
    padding: 3rem var(--padding-left-right);

    @media screen and (min-width: 1280px) {
        padding: 4rem var(--padding-left-right);
    }
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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const products = await getProducts();

        setProducts(products);
    }

    return (
        <ProductsStyled>
            <Header>
                <Title>Todos os Produtos</Title>
                <Link to="/new-product">
                    <Button
                        backgroundColor="var(--button-background-color)"
                        color="var(--white-text-color)"
                    >
                        Adicionar Produto
                    </Button>
                </Link>
            </Header>

            <AllProducts>
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
            </AllProducts>
        </ProductsStyled>
    );
}
