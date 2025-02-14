import Timesheet from "./timesheet.ts"

export default interface LineItem {
    id: string;
    timesheetId?: string;
    date: Date;
    minutes: number;
}