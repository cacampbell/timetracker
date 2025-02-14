import Timesheet from "./timesheet.ts"

export default interface LineItem {
    id?: string;
    TimesheetId?: string;
    date: Date;
    minutes: number;
}