import styled from "styled-components";
import { Link } from "react-router-dom";

import BannerBackground from "./images/banner.png";

import { Button } from "../Button/Button";

const BannerStyled = styled.header`
    background-image: url(${BannerBackground});
    background-size: cover;
    background-position: center;

    height: 15rem;

    display: flex;

    padding: 1rem var(--padding-left-right);

    color: var(--white-text-color);

    @media screen and (min-width: 1280px) {
        padding: 2rem var(--padding-left-right);
    }
`;

const ContentWraper = styled.div`
    margin-top: auto;
`;

const Title = styled.h1`
    font-weight: bold;
`;

const SubTitle = styled.p`
    margin-bottom: 1rem;

    font-weight: 600;
`;

export function Banner() {
    return (
        <BannerStyled>
            <ContentWraper>
                <Title>Fevereiro Promocional</Title>
                <SubTitle>Produtos selecionados com 33% de desconto</SubTitle>
                
                <Link to="/products">
                    <Button
                        backgroundColor="var(--button-background-color)"
                        color="var(--white-text-color)"
                    >
                        Ver todos os Produtos
                    </Button>
                </Link>
            </ContentWraper>
        </BannerStyled>
    );
}
