import http, { type Response } from "../api"
import User from "../models/user"

async function get(id: string): Promise<Response<User>> {
    return await http.get<Promise<User>>(`user/${id}`);
}

async function remove(id: string): Promise<Response<void>> {
    return await http.delete<Response<void>>(`user/${id}`);
}

export default { get, remove }