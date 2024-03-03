import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

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

const NavLinkLogoStyled = styled(NavLink)`
    align-self: center;
`;

const LogoStyled = styled.img`
    @media screen and (min-width: 768px) {
        width: 10rem;
    }
`;

const SearchWrapper = styled.div`
    background-color: var(--search-input-background-color);

    position: relative;
    
    justify-self: flex-start;

    border-radius: 20px;
    margin-right: auto;

    overflow: hidden;

    &:focus-within {
        outline: 2px solid var(--input-focus-border-color);
    }

    @media screen and (min-width: 1280px) {
        width: 17.5rem;
    }
`;

const SearchInput = styled.input`
    background-color: transparent;
    
    width: 75%;
    height: -webkit-fill-available;

    border: none;
    padding: 0.75rem 1rem;

    outline: none;
`;

const MagnifyingGlassIcon = styled(FaMagnifyingGlass)`
    top: 50%;
    right: 1rem;
    
    position: absolute;
    
    transform: translateY(-50%);
`;

export function Header({ user }) {
    return (
        <HeaderStyled>
            <NavLinkLogoStyled to="/">
                <LogoStyled src={Logo} alt="Logo do Mundo Geek" />
            </NavLinkLogoStyled>

            <SearchWrapper>
                <SearchInput className="tablet desktop" type="text" placeholder="O que deseja buscar?" />
                <MagnifyingGlassIcon />
            </SearchWrapper>

            {user ? 
                <img src={User} alt="" />
                :
                <NavLink to="/login">
                    <Button
                        width="7rem"
                        widthTablet="12.5rem"
                    >
                        Login
                    </Button>
                </NavLink>
            }

            <FaMagnifyingGlass className="mobile" size="1.25rem" />
        </HeaderStyled>
    );
}
