<script setup lang="ts">
    import { ref } from "vue";
    import { useUserStore } from "../stores/user"

    const userStore = useUserStore()
    const username = ref("")
    const password = ref("")
    const error = ref<string | null>(null)

    async function tryLogin(): Promise<void> {
        try {
            error.value = null;
            await userStore.login(username.value, password.value)
        } catch (err) {
            console.error(err);
            error.value = "Could not login :("
        }
    }
</script>

<template>
    <div class="flex items-center flex-col">
        <input class="rounded px-4 py-2 w-full border" v-model="username"/>
        <input class="rounded px-4 py-2 w-full border mt-5" v-model="password"/>
        <button class="block px-4 py-2 text-white bg-blue-500 border-transparent mt-5" @click="tryLogin">Log In</button>
        <router-link class="pt-5" :to="{ name: 'register' }">Register</router-link>
        <div class="text-red-500 mt-5" v-show="error != null">{{ error }}</div>
    </div>
</template>