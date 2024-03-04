import axios from "axios";

const categoryAPI = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/category`
});

async function getCategories() {
    const response = await categoryAPI.get();

    const category = response.data;

    return category;
}

async function getCategoryByName(name) {
    const response = await categoryAPI.get(`/${name}`);

    const categories = response.data;
    
    return categories;
}

export {
    getCategories,
    getCategoryByName,
};