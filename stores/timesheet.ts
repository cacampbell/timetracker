import { defineStore } from "pinia";
import Timesheet from "models/timesheet";
import Services from "services";


export const useTimesheetStore = defineStore("timesheet", () => {
    async function getTimesheetsForUser(userId: string): Promise<Timesheet[]> {
        
    }

    async function getLineItemsForTimesheet(timesheetId: string): Promise<LineItem[]> {

    }

    async function createTimesheet(timesheet: Timesheet): Promise<void> {
        await Services.timesheet.create(timesheet)
    }

    async function saveTimesheet(timesheet: Timesheet): Promise<void> {
        await Services.timesheet.save(timesheet)
    }

    async function loadTimesheet(id: string): Promise<Timesheet> {
        const response = await Services.timesheet.get(id)
        return response.data;
    }

    async function deleteTimesheet(timesheet: Timesheet): Promise<void> {
        await Services.timesheet.remove(timesheet.id!)
    }

    return { getTimesheetsForUser, createTimesheet, saveTimesheet, loadTimesheet, deleteTimesheet }
})