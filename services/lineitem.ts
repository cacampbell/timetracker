import http, { type Response } from "../api"
import LineItem from "../models/lineitem"

async function get(id: string): Promise<Response<LineItem>> {
    return await http().get<LineItem>(`lineitem/${id}`)
}

async function create(lineitem: LineItem): Promise<Response<LineItem>> {
    return await http().post<LineItem>("lineitem", lineitem)
}

async function save(lineitem: LineItem): Promise<Response<LineItem>> {
    return await http().patch<LineItem>(`lineitem/${lineitem.id}`, { date: lineitem.date, minutes: lineitem.minutes })
}

async function remove(id: string): Promise<Response<void>> {
    return await http().delete<void>(`lineitem/${id}`);
}

export default { get, create, save, remove }