<script setup lang="ts">
    import { ref } from "vue"
    import { AxiosError } from "axios";
    import { useUserStore } from "../stores/user"
    
    import Button from "../components/Button.vue";
    import Input from "../components/Input.vue";

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

            console.error(err)
            error.value = "Could not register :("
        }
    }
</script>

<template>
    <form class="flex items-center flex-col" @submit.prevent="tryRegister">
        <Input v-model="username"/>
        <Input class="mt-5" v-model="password"/>
        <Button type="submit" color="blue" class="mt-5">Register</button>
        <router-link class="pt-5" :to="{ name: 'login' }">Login</router-link>
        <div class="text-red-500 mt-5" v-show="error != null">{{ error }}</div>
    </form>
</template>