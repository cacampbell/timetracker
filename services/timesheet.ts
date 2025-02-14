import http, { type Response } from "../api"
import Timesheet from "../models/timesheet"
import LineItem from "../models/lineitem"

async function get(id: string): Promise<Response<Timesheet>> {
    return await http().get<Timesheet>(`timesheet/${id}`);
}

async function getTimesheetsForUser(UserId: string): Promise<Response<{ timesheets: Timesheet[] }>> {
    return await http().get<{ timesheets: Timesheet[] }>(`timesheets-for-user/${UserId}`)
}

async function getLineitemsForTimesheet(TimesheetId: string): Promise<Response<{ lineitems: LineItem[] }>> {
    return await http().get<{ lineitems: LineItem[] }>(`lineitems-for-timesheet/${TimesheetId}`)
}

async function create(timesheet: Timesheet): Promise<Response<Timesheet>> {
    return await http().post<Timesheet>("timesheet", timesheet);
}

async function save(timesheet: Timesheet): Promise<Response<Timesheet>> {
    return await http().post<Timesheet>("timesheet", timesheet);
}

async function remove(id: string): Promise<Response<void>> {
    return await http().delete<void>(`timesheet/${id}`);
}

export default { getTimesheetsForUser, getLineitemsForTimesheet, get, create, save, remove }