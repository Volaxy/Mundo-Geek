import { useState } from "react";
import styled from "styled-components";
import { toast } from "sonner";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { InputErrorMessage } from "../Input/InputErrorMessage/InputErrorMessage";

import Logo from "../../images/logo.svg";

const FooterStyled = styled.footer`
    background-color: var(--footer-background-color);

    text-align: center;
`;

const FooterGridWraper = styled.div`
    padding: 1rem var(--padding-left-right);

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);

        padding: 4rem var(--padding-left-right);
    }
`;

const FooterNav = styled.nav`
    @media screen and (min-width: 768px) {
        text-align: left;
    }

    @media screen and (min-width: 1280px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const LogoStyled = styled.img`
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        width: 10rem;

        margin: initial;
    }
`;

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin-top: 1rem;

    @media screen and (min-width: 1280px) {
        margin-top: 0;
    }
`;

const Link = styled.a`
    padding: 0.25rem;
    
    color: var(--footer-link-text-color);
    text-decoration: none;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    margin-top: 2rem;

    text-align: left;

    @media screen and (min-width: 768px) {
        margin-top: 0;
    }
`;

const Legend = styled.legend`
    margin-bottom: 0.5rem;
    
    color: var(--form-legend-text-color);
    font-weight: bold;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Message = styled.textarea`
    width: 100%;
    height: 5rem;

    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 2px 0 -1px var(--input-bottom-border-color);
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;

    &:focus {
        outline: 2px solid var(--input-focus-border-color);
    }

    &::placeholder {
        color: var(--input-placeholder-text-color);
    }
`;

const DevelopBy = styled.div`
    background-color: var(--develop-by-background-color);

    padding: 2rem;

    color: var(--develop-by-text-color);
    font-size: 0.75rem;
    text-align: center;

    line-height: 1.5;
`;

export function Footer() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [showNameError, setShowNameError] = useState(false);
    const [textNameError, setTextNameError] = useState("");
    const [showMessageError, setShowMessageError] = useState(false);
    const [textMessageError, setTextMessageError] = useState("");
    
    function handleNameChange(event) {
        setName(event.target.value);
        setShowNameError(false);
    }
    
    function handleMessageChange(event) {
        setMessage(event.target.value);
        setShowMessageError(false);
    }

    async function handleOnSendMessage(event) {
        event.preventDefault();

        if(isInvalidForm()) return;

        toast.success("Mensagem enviada!", {
            style: {
                height: "fit-content",
                fontSize: "1rem",
            }
        });
    }

    function isInvalidForm() {
        let isInvalid = false;

        if(name === "") {
            setShowNameError(true);
            setTextNameError("O seu nome  é obrigatório");

            isInvalid = true;
        }

        if(message === "") {
            setShowMessageError(true);
            setTextMessageError("A mensagem que você quer enviar é obrigatória");

            isInvalid = true;
        }

        return isInvalid;
    }

    return (
        <FooterStyled>
            <FooterGridWraper>
                <FooterNav>
                    <LogoStyled src={Logo} alt="Logotipo do Mundo Geek" />

                    <nav>
                        <Links>
                            <li><Link href="">Quem somos</Link></li>
                            <li><Link href="">Política de Privacidade</Link></li>
                            <li><Link href="">Programa de Fidelidade</Link></li>
                            <li><Link href="">Nossas Tendas</Link></li>
                            <li><Link href="">Quero ser um franqueado</Link></li>
                            <li><Link href="">Anuncie Aqui</Link></li>
                        </Links>
                    </nav>
                </FooterNav>

                <Form onSubmit={handleOnSendMessage}>
                    <Legend>Fale com a gente</Legend>

                    <Inputs>
                        <div>
                            <Input description="Nome" onChange={handleNameChange} />
                            <InputErrorMessage showError={showNameError} message={textNameError} />
                        </div>
                        <div>
                            <Message placeholder="Escreva sua mensagem" onChange={handleMessageChange}></Message>
                            <InputErrorMessage showError={showMessageError} message={textMessageError} />
                        </div>
                        
                        <Button
                            backgroundColor="var(--button-background-color)"
                            alignSelf="flex-start"
                            color="var(--white-text-color)"
                        >
                            Enviar Mensagem
                        </Button>
                    </Inputs>
                </Form>
            </FooterGridWraper>

            <DevelopBy>
                Desenvolvido por Gustavo Martins Pereira 2024
            </DevelopBy>
        </FooterStyled>
    );
}
