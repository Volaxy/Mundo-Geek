import styled from "styled-components";

import BackupUrl from "./images/backup-url.svg";

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

const ViewProduct = styled.button`
    background-color: unset;

    border: none;
    padding: 0;

    color: var(--view-product-text-color);
    font-weight: bold;
    text-align: left;

    cursor: pointer;
`;

export function Product({ urlImage, name, price, description }) {
    return (
        <ProductWrapper>
            <ProductImage src={urlImage || BackupUrl} alt="" />

            <Title>{name}</Title>
            <Price>R$ {price}</Price>

            <ViewProduct>Ver Produto</ViewProduct>
        </ProductWrapper>
    );
}
