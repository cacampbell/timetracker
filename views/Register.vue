<script setup lang="ts">
    import { ref } from "vue"
    import { useUserStore } from "stores/user"
    
    const userStore = useUserStore()
    const username = ref("")
    const password = ref("")
    const error = ref("")

    async function tryRegister(): Promise<void> {
        try {
            await userStore.register(username.value, password.value)
        } catch {
            error.value = "Could not register :("
        }
    }
</script>

<template>
    <div class="flex items-center flex-col">
        <input class="rounded px-4 py-2 w-full" v-model="username"/>
        <input class="rounded px-4 py-2 w-full" v-model="password"/>
        <button class="block px-4 py-2 text-white bg-blue-50 border-transparent rounded" @click="tryRegister">Register</button>
        <router-link class="pt-5" to="login">Log In</router-link>
        <div class="text-red" v-if="error != null">{{ error }}</div>
    </div>
</template>