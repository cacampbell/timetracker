import { Model } from "pinia-orm"
import Timesheet from "./timesheet.ts"

export default class LineItem extends Model {
    static entity = "lineitem"

    static fields () {
        return {
            id: this.uid(),
            date: this.attr(new Date()),
            minutes: this.number(0),
            timesheet: this.belongsTo(Timesheet, "timesheetId")
        }
    }

    declare id: string;
    declare date: Date;
    declare minutes: number;
    declare timesheetId: string;
}