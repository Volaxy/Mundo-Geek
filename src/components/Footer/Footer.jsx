import styled from "styled-components";

import Logo from "../../images/logo.svg";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

const FooterStyled = styled.footer`
    background-color: var(--footer-background-color);

    text-align: center;
`;

const LogoStyled = styled.img`
    margin-top: 1rem;
`;

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin-top: 1rem;
    padding: 1rem;
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
    padding: 1rem;

    text-align: left;
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
    height: 5rem;

    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 2px 0 -1px var(--input-bottom-border-color);
    padding: 0.5rem 0.75rem;

    &:focus {
        outline: 2px solid var(--input-focus-border-color);
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
    return (
        <FooterStyled>
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

            <Form>
                <Legend>Fale com a gente</Legend>

                <Inputs>
                    <Input description="Nome" />
                    <Message placeholder="Escreva sua mensagem"></Message>

                    <Button
                        backgroundColor="var(--button-background-color)"
                        color="var(--white-text-color)"
                    >
                        Enviar Mensagem
                    </Button>
                </Inputs>
            </Form>

            <DevelopBy>
                Desenvolvido por Gustavo Martins Pereira 2024
            </DevelopBy>
        </FooterStyled>
    );
}
