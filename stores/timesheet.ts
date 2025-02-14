import { defineStore } from "pinia";
import Timesheet from "models/timesheet";


export const useTimesheetStore = defineStore("timesheet", () => {
    async function getTimesheetsForUser(userId: string): Promise<Timesheet[]> {
        
    }

    async function getLineItemsForTimesheet(timesheetId: string): Promise<LineItem[]> {
        
    }

    async function createTimesheet(timesheet: Timesheet): Promise<void> {

    }

    async function saveTimesheet(timesheet: Timesheet): Promise<void> {

    }

    async function loadTimesheet(id: string): Promise<Timesheet> {

    }

    async function deleteTimesheet(timesheet: Timesheet): Promise<void> {

    }

    return { getTimesheetsForUser, createTimesheet, saveTimesheet, loadTimesheet, deleteTimesheet }
})