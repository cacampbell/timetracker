<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Timesheet from "../models/timesheet"
import LineItem from "../models/lineitem";
import { useTimesheetStore } from "../stores/timesheet"

const timesheetStore = useTimesheetStore()

const id = ref<string | null>(null)

onMounted(async () => {
    const route = useRoute()
    
})

</script>

<template>
</template>