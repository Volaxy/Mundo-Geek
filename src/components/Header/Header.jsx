import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";

import Logo from "../../images/logo.svg";
import User from "./images/user.svg";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding: 1rem var(--padding-left-right);

    @media screen and (min-width: 768px) {
        align-items: stretch;
    }

    @media screen and (min-width: 1280px) {
        padding: 2rem var(--padding-left-right);
    }
`;

const LinkLogoStyled = styled(Link)`
    align-self: center;
`;

const LogoStyled = styled.img`
    @media screen and (min-width: 768px) {
        width: 10rem;
    }
`;

export function Header({ user }) {
    return (
        <HeaderStyled>
            <LinkLogoStyled to="/">
                <LogoStyled src={Logo} alt="Logo do Mundo Geek" />
            </LinkLogoStyled>

            {user ? 
                <img src={User} alt="" />
                :
                <Link to="/login">
                    <Button
                        width="7rem"
                        widthTablet="12.5rem"
                    >
                        Login
                    </Button>
                </Link>
            }
        </HeaderStyled>
    );
}
