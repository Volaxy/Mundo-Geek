import styled from "styled-components";
import Product1 from "./images/product-1.png";

const ProductWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ProductImage = styled.img`
    width: 100%;
`;

const Title = styled.h3`
    color: var(--product-title-text-color);
    font-weight: 500;
`;

const Price = styled.h4`
    color: var(--product-title-text-color);
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

export function Product() {
    return (
        <ProductWrapper>
            <ProductImage src={Product1} alt="" />

            <Title>Produto XYZ</Title>
            <Price>R$ 60,00</Price>

            <ViewProduct>Ver Produto</ViewProduct>
        </ProductWrapper>
    );
}
