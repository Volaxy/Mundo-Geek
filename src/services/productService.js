import axios from "axios";

import { ProductError } from "../utils/errors/productError";

const productAPI = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/products`,
});

async function createProduct(url, category, name, price, description) {
    try {
        const response = await productAPI.post("", {
            url,
            category,
            name,
            price,
            description
        });

        const product = response.data;

        return product;
    } catch(error) {
        throw new ProductError(error.response ? error.response.data.error : error.message);
    }
}

async function getProducts() {
    try {
        const response = await productAPI.get();

        const products = response.data;

        return products;
    } catch(error) {
        throw new ProductError(error.response ? error.response.data.error : error.message);
    }
}

export {
    createProduct,
    getProducts,
};