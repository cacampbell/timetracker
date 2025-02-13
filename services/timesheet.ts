import http, { type Response } from "../api"
import Timesheet from "../models/timesheet"

async function get(id: string): Promise<Response<Timesheet>> {
    return await http.get<Response<Timesheet>>(`timesheet/${id}`);
}

async function create(timesheet: Timesheet): Promise<Response<Timesheet>> {
    return await http.post<Response<Timesheet>>("timesheet", timesheet.$toJson());
}

async function save(timesheet: Timesheet): Promise<Response<Timesheet>> {
    return await http.post<Response<Timesheet>>("timesheet", timesheet.$toJson());
}

async function remove(id: string): Promise<Response<void>> {
    return await http.delete<Response<void>>(`timesheet/${id}`);
}
