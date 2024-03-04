import styled from "styled-components";
import { Link } from "react-router-dom";

import BackupUrl from "/src/images/backup-url.svg";

const ProductWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ProductImage = styled.img`
    width: 100%;

    border-radius: 20px;
`;

const Title = styled.h3`
    color: var(--title-text-color);
    font-weight: 500;
`;

const Price = styled.h4`
    color: var(--title-text-color);
    font-weight: bold;
`;

const ViewProduct = styled(Link)`
    background-color: unset;

    border: none;
    padding: 0;

    color: var(--view-product-text-color);
    font-weight: bold;
    text-align: left;

    cursor: pointer;
`;

export function Product({ id, urlImage, name, price, description }) {
    return (
        <ProductWrapper>
            <ProductImage src={urlImage || BackupUrl} alt="" />

            <Title>{name}</Title>
            <Price>R$ {price}</Price>

            <ViewProduct
                to={`/product/${id}`}
                state={{ id, urlImage, name, price, description }}
            >
                Ver Produto
            </ViewProduct>
        </ProductWrapper>
    );
}
