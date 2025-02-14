<script setup lang="ts">
    import { ref } from "vue"
    import { AxiosError } from "axios";
    import { useUserStore } from "../stores/user"
    
    const userStore = useUserStore()
    const username = ref("")
    const password = ref("")
    const error = ref<string | null>(null)

    async function tryRegister(): Promise<void> {
        try {
            error.value = null;
            await userStore.register(username.value, password.value)
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.data.error != null) {
                    if (err.response.data.error.includes("already registered")) {
                        error.value = "Username already registered :("
                        return;
                    }
                }
    
            }

            error.value = "Could not register :("
        }
    }
</script>

<template>
    <form class="flex items-center flex-col" @submit.prevent="tryRegister">
        <input class="rounded px-4 py-2 w-full border" v-model="username"/>
        <input class="rounded px-4 py-2 w-full border mt-5" v-model="password"/>
        <button type="submit" class="block px-4 py-2 text-white bg-blue-500 border-transparent mt-5" @click="tryRegister">Register</button>
        <router-link class="pt-5" :to="{ name: 'login' }">Login</router-link>
        <div class="text-red-500 mt-5" v-show="error != null">{{ error }}</div>
    </form>
</template>