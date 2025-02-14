<script setup lang="ts">
    import { computed } from "vue"
    import { useTimesheetStore } from "../stores/timesheet"
    const timesheetStore = useTimesheetStore()
    const timesheet = computed(() => timesheetStore.currentTimesheet)
    const lineitems = computed(() => timesheetStore.currentLineitems)
</script>

<template>
    <div v-if="timesheet != null" class="flex items-center flex-col">
        <h3>Timesheet</h3>
        <div>ID: {{ timesheet?.id ?? "No ID" }}</div>
        <div>Description: {{ timesheet?.description ?? "No Description" }}</div>
        <div>Rate: {{ timesheet?.rate ?? "No Rate" }}</div>
        <div>Total Time: {{ timesheet?.totalTime }}</div>
        <div>Total Cost: {{ timesheet?.totalCost }}</div>
        <h3 class="mt-2">Line Items</h3>
        <div v-for="item of lineitems">
            ID: {{ item.id ?? "No ID" }} - {{ item.date }} - {{ item.minutes }} minutes
        </div>
    </div>
</template>