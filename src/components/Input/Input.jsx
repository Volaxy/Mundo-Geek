import styled from "styled-components";

const Label = styled.label`
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
    display: flex;
    gap: 0.25rem;

    color: var(--input-description-text-color);
`;

const Required = styled.span`
    color: var(--required-input-text-color);
    font-size: 2rem;

    line-height: 0.75;
`;

const InputStyled = styled.input`
    border: none;
    padding: 0.5rem auto;

    outline: none;
`;

export function Input({ description, type = "text", required, onChange }) {
    return (
        <Label>
            <Description>
                {description}
                <Required>{required ? "*" : ""}</Required>
            </Description>

            <InputStyled
                type={type}
                required={required}
                onChange={onChange}
            />
        </Label>
    );
}
