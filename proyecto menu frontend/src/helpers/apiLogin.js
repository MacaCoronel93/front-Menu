import axios from "axios";

const API_BASE_URL = "https://proyecto-menu.onrender.com/api";

export const loginRequest = async user => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, user, {
            headers: { "Content-Type": "application/json; charset=UTF-8" },
        });
        return response.data;
    } catch (error) {
        console.error("Error en la solicitud de inicio de sesión:", error);
        throw error;
    }
}
