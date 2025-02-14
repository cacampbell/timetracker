<script setup lang="ts">
    import { useUserStore } from "stores/user"
    import { ref } from "vue";

    const userStore = useUserStore()
    const username = ref("")
    const password = ref("")
    const error = ref<string | null>(null)

    async function tryLogin(): Promise<void> {
        try {
            error.value = null;
            await userStore.login(username.value, password.value)
        } catch {
            error.value = "Could not login :("
        }
    }
</script>

<template>
    <div class="flex items-center flex-col">
        <input class="rounded px-4 py-2 w-full" v-model="username"/>
        <input class="rounded px-4 py-2 w-full" v-model="password"/>
        <button class="block px-4 py-2 text-white bg-blue-50 border-transparent rounded" @click="tryLogin">Log In</button>
        <router-link class="pt-5" to="register">Register</router-link>
        <div class="text-red" v-if="error != null">{{ error }}</div>
    </div>
</template>