import styled from "styled-components";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

const LoginStyled = styled.section`
    background-color: var(--login-background-color);
`;

const Form = styled.form`
    width: 33%;
    min-width: 15rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;

    margin: auto;
    padding: 3rem 2rem;
`;

const Title = styled.legend`
    color: var(--title-text-color);
    font-weight: bold;
    text-align: center;
`;

export function Login() {
    return (
        <LoginStyled>
            <Form>
                <Title>Iniciar seção</Title>

                <Input description="Escreva o seu E-mail" type="email" />
                <Input description="Escreva sua senha" type="password" />

                <Button backgroundColor="var(--button-background-color)" color="var(--white-text-color)">Entrar</Button>
            </Form>
        </LoginStyled>
    );
}
