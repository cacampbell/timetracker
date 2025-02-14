import { ref } from "vue";
import { defineStore } from "pinia";
import User from "../models/user";
import Services from "../services";

export const useUserStore = defineStore("user", () => {
    const currentUser = ref<User | null>(null);
    const accessToken = ref<string | null>(null);

    async function register(username: string, password: string): Promise<void> {
        const response = await Services.auth.register(username, password);
        if (response.status === 200) {
            currentUser.value = response.data.user;
            accessToken.value = response.data.token;
        } else {
            throw new Error("Could not register.")
        }
    }

    async function login(username: string, password: string): Promise<void> {
        const response = await Services.auth.login(username, password);
        if (response.status === 200) {
            accessToken.value = response.data.token;
        } else {
            throw new Error("Could not login.")
        }
    }

    return {
        currentUser,
        accessToken,
        register,
        login
    }
})