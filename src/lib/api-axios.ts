// Cliente Axios global
import axios from "axios";

 export const api = axios.create({
    baseURL: process.env.KEY_API ||  "http://localhost:3000/vagas",
    headers: {
        "Content-Type": "application/json",
    }
})
