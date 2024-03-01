import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

const LoginStyled = styled.section`
    background-color: var(--login-background-color);

    padding: 3rem 2rem;

    @media screen and (min-width: 1280px) {
        padding: 5rem 4rem;
    }
`;

const Form = styled.form`
    width: 33%;
    min-width: 15rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;

    margin: auto;

    @media screen and (min-width: 768px) {
        width: 50%;
    }
`;

const Title = styled.legend`
    color: var(--title-text-color);
    font-weight: bold;
    text-align: center;
`;

const RegisterAccount = styled.p`
    font-size: 0.75rem;
`;

const RegisterLink = styled(NavLink)`
    &:hover {
        text-decoration: underline;
    }
`;

export function Login() {
    return (
        <LoginStyled>
            <Form>
                <Title>Iniciar seção</Title>

                <Input description="Escreva o seu nome de usuário" />
                <Input description="Escreva sua senha" type="password" />

                <Button backgroundColor="var(--button-background-color)" color="var(--white-text-color)">Entrar</Button>

                <RegisterAccount>Ainda não tem uma conta? <RegisterLink to="/register">Cadastre-se</RegisterLink></RegisterAccount>
            </Form>
        </LoginStyled>
    );
}
