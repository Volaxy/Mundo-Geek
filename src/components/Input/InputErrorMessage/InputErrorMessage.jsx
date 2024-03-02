import styled from "styled-components";

const ErrorMessage = styled.p`
    margin-top: 0.5rem;

    color: var(--error-message-text-color);
    font-size: 0.75rem;
`;

export function InputErrorMessage({ message, showError }) {
    return (
        showError &&
        <ErrorMessage>{message}</ErrorMessage>
    );
}
