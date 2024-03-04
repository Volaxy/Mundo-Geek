import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { InputErrorMessage } from "../components/Input/InputErrorMessage/InputErrorMessage";
import { login } from "../services/userService";
import { toast } from "sonner";

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

const RegisterLink = styled(Link)`
    &:hover {
        text-decoration: underline;
    }
`;

export function Login({ onAuthenticate }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showUsernameError, setShowUsernameError] = useState(false);
    const [usernameMessageError, setUsernameMessageError] = useState("");
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [passwordMessageError, setPasswordMessageError] = useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
        setShowUsernameError(false);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setShowPasswordError(false);
    }

    async function handleOnLogin(event) {
        event.preventDefault();

        if(isInvalidForm()) return;

        try {
            const user = await login(username, password);

            onAuthenticate(user);

            const message = `Usuário "${user}" autenticado com sucesso!`
            toast.success(message, {
                style: {
                    height: "fit-content",
                    fontSize: "1rem",
                }
            });
        } catch(error) {
            toast.error(error.message, {
                style: {
                    height: "fit-content",
                    fontSize: "1rem",
                }
            });
        }
    }

    function isInvalidForm() {
        let isInvalid = false;

        if(username === "") {
            setShowUsernameError(true);
            setUsernameMessageError("O nome de usuário é obrigatório");

            isInvalid = true;
        }

        if(password === "") {
            setShowPasswordError(true);
            setPasswordMessageError("A senha é obrigatória");

            isInvalid = true;
        }

        return isInvalid;
    }

    return (
        <LoginStyled>
            <Form onSubmit={handleOnLogin} noValidate>
                <Title>Iniciar seção</Title>

                <div>
                    <Input description="Escreva o seu nome de usuário" required onChange={handleUsernameChange} />
                    <InputErrorMessage showError={showUsernameError} message={usernameMessageError} />
                </div>
                <div>
                    <Input description="Escreva sua senha" type="password" required onChange={handlePasswordChange} />
                    <InputErrorMessage showError={showPasswordError} message={passwordMessageError} />
                </div>

                <Button type="submit" backgroundColor="var(--button-background-color)" color="var(--white-text-color)">Entrar</Button>

                <RegisterAccount>Ainda não tem uma conta? <RegisterLink to="/register">Cadastre-se</RegisterLink></RegisterAccount>
            </Form>
        </LoginStyled>
    );
}
