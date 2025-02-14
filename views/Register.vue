<script setup lang="ts">
    import { ref } from "vue"
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
            console.error(err);
            error.value = "Could not register :("
        }
    }
</script>

<template>
    <div class="flex items-center flex-col">
        <input class="px-4 py-2 w-full" v-model="username"/>
        <input class="px-4 py-2 w-full" v-model="password"/>
        <button class="block px-4 py-2 text-white bg-blue-50 border-transparent rounded-xs" @click="tryRegister">Register</button>
        <router-link class="pt-5" :to="{ name: 'login' }">Log In</router-link>
        <div v-if="error != null"><span class="text-red-500">{{ error }}</span></div>
    </div>
</template>