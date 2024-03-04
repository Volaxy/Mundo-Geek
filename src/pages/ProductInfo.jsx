import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import BackupImage from "/src/images/backup-url.svg";

import { Product } from "../components/Category/Product/Product";
import { getProducts } from "../services/productService";

const ProductInfoStyled = styled.section`
    background-color: var(--product-background-color);

    @media screen and (min-width: 768px) {
        padding: 1rem var(--padding-left-right);
    }

    @media screen and (min-width: 1280px) {
        padding: 3rem var(--padding-left-right);
    }
`;

const ProductWrapper = styled.section`
    margin-bottom: 4rem;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ProductImage = styled.img`
    width: 100%;
`;

const Info = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        padding: 1rem var(--padding-left-right);
    }
`;

const Name = styled.h2`
    color: var(--title-text-color);
    font-size: 2.5rem;
`;

const Price = styled.h3`
    color: var(--title-text-color);
    font-size: 1.25rem;
`;

const SimilarProducts = styled.article`
    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`;

const SimilarProductsTitle = styled.h3`
    margin-bottom: 1rem;

    color: var(--title-text-color);
    font-size: 2rem;
`;

const OtherProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
`;

export function ProductInfo() {
    const location = useLocation();
    const { id, urlImage, name, price, description } = location.state;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [location.key]);

    async function fetchProducts() {
        let products = await getProducts();
        products = products
            .filter(product => product._id != id)
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, 6);

        setProducts(products);
    }

    return (
        <ProductInfoStyled>
            <ProductWrapper>
                <ProductImage src={urlImage || BackupImage} alt="Imagem do produto" />
                
                <Info>
                    <Name>{name}</Name>
                    <Price>R$ {price}</Price>
                    <p>{description}</p>
                </Info>
            </ProductWrapper>
            
            <SimilarProducts>
                <SimilarProductsTitle>Produtos Similares</SimilarProductsTitle>

                <OtherProducts>
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
                </OtherProducts>
            </SimilarProducts>
        </ProductInfoStyled>
    );
}
