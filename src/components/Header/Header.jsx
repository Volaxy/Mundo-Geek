import styled from "styled-components";

import Logo from "../../images/logo.svg";
import Search from "./images/search.svg";

import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
`;

export function Header() {
    return (
        <HeaderStyled>
            <NavLink to="/">
                <img src={Logo} alt="Logo do Mundo Geek" />
            </NavLink>

            <NavLink to="/login">
                <Button
                    maxWidth="10rem"
                    flex="1 1 0"
                >
                    Login
                </Button>
            </NavLink>

            <img src={Search} alt="ícone para busca de produtos" />
        </HeaderStyled>
    );
}
