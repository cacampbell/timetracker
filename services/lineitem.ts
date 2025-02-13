import http, { type Response } from "../api"
import LineItem from "../models/lineitem"

async function get(id: string): Promise<Response<LineItem>> {
    return await http.get<Response<LineItem>>(`lineitem/${id}`)
}

async function create(lineitem: LineItem): Promise<Response<void>> {
    return await http.post<Response<void>>("lineitem", lineitem.$toJson())
}

async function save(lineitem: LineItem): Promise<Response<LineItem>> {
    return await http.patch<Response<LineItem>>(`lineitem/${lineitem.id}`, { date: lineitem.date, minutes: lineitem.minutes })
}

async function remove(id: string): Promise<Response<void>> {
    return await http.delete<Response<void>>(`lineitem/${id}`);
}
