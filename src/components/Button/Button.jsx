import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: ${props => props.$backgroundColor || "transparent"};

    max-width: ${props => props.$maxWidth || "initial"};

    flex: ${props => props.$flex || "initial"};

    border: 1px solid var(--button-border-color);
    padding: 0.75rem;

    color: var(--button-text-color);
    font-weight: 600;
    text-align: center;
`;

export function Button({ children, backgroundColor, maxWidth, flex }) {
    return (
        <ButtonStyled
            $backgroundColor={backgroundColor}
            $maxWidth={maxWidth}
            $flex={flex}
        >
            {children}
        </ButtonStyled>
    );
}