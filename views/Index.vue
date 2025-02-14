<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col items-center">
        <h3 class="text-blue-500">Time Tracker</h3>
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
</template>