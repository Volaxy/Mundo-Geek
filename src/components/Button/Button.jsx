import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: ${props => props.$backgroundColor || "transparent"};

    max-width: ${props => props.$maxWidth || "initial"};

    flex: ${props => props.$flex || "initial"};

    border: 1px solid var(--button-border-color);
    padding: 0.75rem 1.5rem;

    color: ${props => props.$color || "var(--button-text-color)"};
    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: color-mix(in srgb, ${props => props.$backgroundColor || "transparent"}, hsla(0, 0%, 0%, 0.5) 10%);
    }
`;

export function Button({ children, backgroundColor, maxWidth, flex, color }) {
    return (
        <ButtonStyled
            $backgroundColor={backgroundColor}
            $maxWidth={maxWidth}
            $flex={flex}
            $color={color}
        >
            {children}
        </ButtonStyled>
    );
}