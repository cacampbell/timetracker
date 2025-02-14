<script setup lang="ts">
    import { ref } from "vue";
    import { useUserStore } from "../stores/user"
    import { useRouter } from "vue-router";

    import Button from "../components/Button.vue"
    import Input from "../components/Input.vue"

    const router = useRouter()

    const userStore = useUserStore()
    const username = ref("")
    const password = ref("")
    const error = ref<string | null>(null)

    async function tryLogin(): Promise<void> {
        try {
            error.value = null;
            await userStore.login(username.value, password.value)
            router.push("home");
        } catch (err) {
            console.error(err);
            error.value = "Could not login :("
        }
    }
</script>

<template>
    <form class="flex items-center flex-col" @submit.prevent="tryLogin">
        <Input v-model="username"/>
        <Input class="mt-5" v-model="password"/>
        <Button color="blue" type="submit" class="mt-5">Log In</Button>
        <router-link class="pt-5" :to="{ name: 'register' }">Register</router-link>
        <div class="text-red-500 mt-5" v-show="error != null">{{ error }}</div>
    </form>
</template>