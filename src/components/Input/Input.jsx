import styled from "styled-components";

const Label = styled.span`
    background-color: var(--input-background-color);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    border-radius: 0.25rem;
    box-shadow: 0 2px 0 -1px var(--input-bottom-border-color);
    padding: 0.5rem 0.75rem;

    &:focus-within {
        outline: 2px solid var(--input-focus-border-color);
    }
`;

const Description = styled.span`
    color: var(--input-description-text-color);
`;

const InputStyled = styled.input`
    border: none;
    padding: 0.5rem auto;

    outline: none;
`;

export function Input() {
    return (
        <Label>
            <Description>Nome</Description>
            <InputStyled type="text" />
        </Label>
    );
}
