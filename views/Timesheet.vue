<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Timesheet from "../models/timesheet"
import { useTimesheetStore } from "../stores/timesheet"

const id = ref<string | null>(null)
const timesheet = ref<Timesheet | null>(null)

onMounted(async () => {
    const route = useRoute()
    if (route.params.id != null) {
        id.value = route.params.id as string;
        timesheet.value = await loadTimesheet(id.value)
        
    } else {
        timesheet.value = {
            id: "",
            userId: "",
            lineitemIds: [],
            description: "",
            rate: 0,
            totalTime: 0,
            totalCost: 0
        }
    }
})
</script>

<template>
</template>