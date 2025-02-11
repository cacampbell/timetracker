import { Model } from "pinia-orm"

export default class User extends Model {
    static entity = "user"

    static fields () {
        return {
            id: this.uid(),
            username: this.string("")
        }
    }
}