<script setup lang="ts">
    import { computed } from "vue"

    const props = defineProps<{
        type: "reset" | "submit" | "button" | undefined
        color: "blue" | "green" | "red";
    }>()

    const classes = computed(() => {
        // Workaround for tailwind not being able to read dynamic class names
        switch (props.color) {
            case "blue":
                return "block px-4 py-2 text-white bg-blue-500 border-transparent"
            case "green":
                return "block px-4 py-2 text-white bg-green-500 border-transparent"
            case "red":
                return "block px-4 py-2 text-white bg-red-500 border-transparent"
            default:
                break;
        }
    })
</script>
<template>
    <button :type="type" :class="classes"><slot></slot></button>
</template>