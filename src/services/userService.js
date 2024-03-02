import axios from "axios";
import { UserError } from "../utils/errors/userError";

const userAPI = axios.create({
    baseURL: "http://localhost:3000",
});

async function register(username, password) {
    try {
        const response = await userAPI.post("/register", {
            username,
            password,
        });

        const user = response.data.username;

        return user;
    } catch(error) {
        throw new UserError(error.response ? error.response.data.error : error.message);
    }
}

export {
    register,
};