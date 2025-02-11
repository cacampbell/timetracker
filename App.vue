<script setup lang="ts">
import { ref } from "vue"

const message = ref("Hello, World!")
</script>

<template>
    <div class="flex items-center justify-center h-screen w-screen">
        {{ message }}
    </div>
</template>