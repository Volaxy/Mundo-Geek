import { useState } from "react";
import styled from "styled-components";
import { toast } from "sonner";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { InputErrorMessage } from "../components/Input/InputErrorMessage/InputErrorMessage";
import { createProduct } from "../services/productService";

const Form = styled.form`
    background-color: var(--new-product-background-color);

    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem var(--padding-left-right);

    @media screen and (min-width: 1280px) {
        padding: 2.75rem 15rem;
    }
`;

const Title = styled.legend`
    color: var(--title-text-color);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
`;

export function NewProduct() {
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");

    const [showCategoryError, setShowCategoryError] = useState(false);
    const [categoryMessageError, setCategoryMessageError] = useState("");
    const [showNameError, setShowNameError] = useState(false);
    const [nameMessageError, setNameMessageError] = useState("");
    const [showPriceError, setShowPriceError] = useState(false);
    const [priceMessageError, setPriceMessageError] = useState("");

    function handleUrlChange(event) {
        setUrl(event.target.value);
    }
    
    function handleCategoryChange(event) {
        setCategory(event.target.value);
        setShowCategoryError(false);
    }
    
    function handleNameChange(event) {
        setName(event.target.value);
        setShowNameError(false);
    }

    function handlePriceChange(event) {
        setPrice(event.target.value);
        setShowPriceError(false);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    async function handleOnCreateProduct(event) {
        event.preventDefault();

        if(isInvalidForm()) return;

        try {
            await createProduct(url, category, name, price, description);

            const message = `Produto criado com sucesso!`
            toast.success(message, {
                style: {
                    height: "fit-content",
                    fontSize: "1rem",
                }
            });
        } catch(error) {
            toast.error(error.message, {
                style: {
                    height: "fit-content",
                    fontSize: "1rem",
                }
            });
        }
    }

    function isInvalidForm() {
        let isInvalid = false;

        if(category === "") {
            setShowCategoryError(true);
            setCategoryMessageError("O nome da categoria é obrigatório");

            isInvalid = true;
        }

        if(name === "") {
            setShowNameError(true);
            setNameMessageError("O nome do produto é obrigatório");

            isInvalid = true;
        }

        if(!price || price <= 0) {
            setShowPriceError(true);
            setPriceMessageError("O preço é obrigatório e deve ser maior que 0");

            isInvalid = true;
        }

        return isInvalid;
    }

    return (
        <Form onSubmit={handleOnCreateProduct} noValidate>
            <Title>Adicionar novo Produto</Title>

            <Input description="URL da imagem" onChange={handleUrlChange} />
            <div>
                <Input description="Categoria" required onChange={handleCategoryChange} />
                <InputErrorMessage showError={showCategoryError} message={categoryMessageError} />
            </div>
            <div>
                <Input description="Nome do produto" required onChange={handleNameChange} />
                <InputErrorMessage showError={showNameError} message={nameMessageError} />
            </div>
            <div>
                <Input description="Preço do Produto" type="number" required onChange={handlePriceChange} />
                <InputErrorMessage showError={showPriceError} message={priceMessageError} />
            </div>
            <Input description="Descrição do produto" onChange={handleDescriptionChange} />

            <Button type="submit" backgroundColor="var(--button-background-color)" color="var(--white-text-color)">Adicionar Produto</Button>
        </Form>
    );
}
