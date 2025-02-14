import axios from "axios"

type Response<T> = {
    status: number;
    data: T
}

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export type { Response }
export default instance