import axios from "axios";

import { ProductError } from "../utils/errors/productError";

const productAPI = axios.create({
    baseURL: "http://localhost:3000/products",
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

export {
    createProduct,
};