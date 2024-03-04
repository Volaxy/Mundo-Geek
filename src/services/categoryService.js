import axios from "axios";

import { CategoryError } from "../utils/errors/categoryError";

const categoryAPI = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/category`
});

async function createCategory(name) {
    try {
        await categoryAPI.post("", { name });
    } catch(error) {
        throw new CategoryError(error.response ? error.response.data.error : error.message);
    }
}

async function getCategories() {
    try {
        const response = await categoryAPI.get();

        const category = response.data;

        return category;
    } catch(error) {
        throw new CategoryError(error.response ? error.response.data.error : error.message);
    }
}

async function getCategoryByName(name) {
    try {
        const response = await categoryAPI.get(`/${name}`);
        
        const category = response.data;
        
        return category;
    } catch(error) {
        throw new CategoryError(error.response ? error.response.data.error : error.message);
    }
}

export {
    createCategory,
    getCategories,
    getCategoryByName,
};