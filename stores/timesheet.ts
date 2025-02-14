import { defineStore } from "pinia";
import Timesheet from "models/timesheet";


export default defineStore("timesheet", () => {
    async function getTimesheetsForUser(userId: string): Promise<Timesheet[]> {
        
    }

    async function createTimesheet(timesheet: Timesheet): Promise<void> {

    }

    async function saveTimesheet(timesheet: Timesheet): Promise<void> {

    }

    async function deleteTimesheet(timesheet: Timesheet): Promise<void> {

    }
})