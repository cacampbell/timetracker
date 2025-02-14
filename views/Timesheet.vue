<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Timesheet from "../models/timesheet"
import LineItem from "../models/lineitem";
import { useTimesheetStore } from "../stores/timesheet"

import Button from "../components/Button.vue"
import CurrentTimesheet from "../components/CurrentTimesheet.vue"

const timesheetStore = useTimesheetStore()

const id = ref<string | null>(null)

onMounted(async () => {
    const route = useRoute()
    const id = route.params.id
    if (id) await timesheetStore.loadTimesheet(id as string)
})

async function handleSubmit() {
    await timesheetStore.saveTimesheet()
}

async function handleDelete() {
    await timesheetStore.deleteTimesheet(timesheetStore.currentTimesheet!.id!)
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <CurrentTimesheet />
        <Button type="submit" color="blue">Save</Button>
        <Button type="button" color="red" @click="handleDelete">Delete</Button>
    </form>
</template>