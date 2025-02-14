import http, { type Response } from "../api"

type RegisterSuccess = {
    token: string;
    user: {
        createdAt: string;
        hashedPassword: string;
        id: string;
        updatedAt: string;
        username: string;
    }
}

type LoginSuccess = {
    token: string;
}

async function register(username: string, password: string): Promise<Response<RegisterSuccess>> {
    return await http.post<Response<RegisterSuccess>>("register", { username, password });
}

async function login(username: string, password: string): Promise<Response<LoginSuccess>> {
    return await http.post<Response<LoginSuccess>>("login", { username, password });
}

export default { register, login }