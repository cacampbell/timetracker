import axios from "axios"
import { useUserStore } from "./stores/user"

type Response<T> = {
    status: number;
    data: T
}

// will need to change config of the instances when token for auth is avail
function createInstance() {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL
    })

    // if store is available, if token is available, use
    const userStore = useUserStore()
    if (userStore.accessToken) {
        console.log("setting token on axios instance")
        instance.defaults.headers.common["Authorization"] = userStore.accessToken
    } else {
        console.log("no token")
    }

    return instance;
}

export type { Response }
export default createInstance