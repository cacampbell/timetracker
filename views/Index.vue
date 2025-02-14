<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="text-blue-500 text-2xl pb-5">Time Tracker</h1>
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
</template>