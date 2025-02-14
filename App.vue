<script setup lang="ts">
</script>

<template>
    <div class="flex items-center justify-center h-screen w-screen">
        <router-view :key="$route.fullPath" />
    </div>
</template>