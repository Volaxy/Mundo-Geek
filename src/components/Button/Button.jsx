import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: ${props => props.$backgroundColor || "transparent"};

    width: ${props => props.$width || "initial"};

    border: 1px solid var(--button-border-color);
    padding: 0.75rem 2rem;

    color: ${props => props.$color || "var(--button-text-color)"};
    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: color-mix(in srgb, ${props => props.$backgroundColor || "transparent"}, hsla(0, 0%, 0%, 0.5) 10%);
    }

    @media screen and (min-width: 768px) {
        width: ${props => props.$widthTablet || "initial"};
    }
`;

export function Button({ children, backgroundColor, width, widthTablet, color }) {
    return (
        <ButtonStyled
            $backgroundColor={backgroundColor}
            $width={width}
            $widthTablet={widthTablet}
            $color={color}
        >
            {children}
        </ButtonStyled>
    );
}