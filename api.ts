import axios from "axios"

type Response<T> = {
    success?: boolean;
    content?: T;
    status?: number;
}

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export type { Response }
export default instance