import styled from "styled-components";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

const Form = styled.form`
    background-color: var(--new-product-background-color);

    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    @media screen and (min-width: 1280px) {
        padding: 2.75rem 15rem;
    }
`;

const Title = styled.legend`
    color: var(--title-text-color);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
`;

export function NewProduct() {
    return (
        <Form>
            <Title>Adicionar novo Produto</Title>

            <Input description="URL da imagem" />
            <Input description="Categoria" />
            <Input description="Nome do produto" />
            <Input description="Preço do Produto" type="number" />
            <Input description="Descrição do produto" />

            <Button backgroundColor="var(--button-background-color)" color="var(--white-text-color)">Adicionar Produto</Button>
        </Form>
    );
}
