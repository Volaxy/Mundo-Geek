import styled from "styled-components";

import BannerBackground from "./images/banner.png";

import { Button } from "../Button/Button";

const BannerStyled = styled.header`
    background-image: url(${BannerBackground});
    background-size: cover;
    background-position: center;

    height: 15rem;

    display: flex;

    padding: 1rem;

    color: var(--white-text-color);
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
                
                <Button
                    backgroundColor="var(--button-background-color)"
                    color="var(--white-text-color)"
                >
                    Ver Consolas
                </Button>
            </ContentWraper>
        </BannerStyled>
    );
}
