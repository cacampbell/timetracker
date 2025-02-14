<script setup lang="ts">
    import { useRouter } from "vue-router"

    import Button from "../components/Button.vue"

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
        <Button
            type="button"
            color="green"
            @click="createTimesheet">
            Create Timesheet
        </Button>
        <Button
            type="button"
            color="blue"
            class="mt-5"
            @click="viewTimesheets">
            View My Timesheets
        </Button>
    </div>
</template>