<script setup lang="ts">
    import { useRouter } from "vue-router"
    const router = useRouter()

    function createTimesheet(): void {
        router.push("timesheet")
    }

    function viewTimesheets(): void {
        router.push("timesheets")
    }
</script>

<template>
    <div class="flex flex-col items-center">
        <button
            class="block px-4 py-2 text-white bg-green-500 border-transparent"
            @click="createTimesheet">
            Create Timesheet
        </button>
        <button
            class="block px-4 py-2 text-white bg-blue-500 border-transparent mt-5"
            @click="viewTimesheets">
            View My Timesheets
        </button>
    </div>
</template>