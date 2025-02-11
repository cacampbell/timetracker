import { Model } from "pinia-orm"
import User from "./user.ts"
import LineItem from "./lineitem.ts"

export default class Timesheet extends Model {
    static entity = "timesheet"

    static fields () {
        return {
            id: this.uid(),
            user: this.belongsTo(User, 'userId'),
            lineitems: this.hasMany(LineItem, 'lineItemId'),
            description: this.string(""),
            rate: this.number(0),
            totalTime: this.number(0),
            totalCost: this.number(0)
        }
    }
}