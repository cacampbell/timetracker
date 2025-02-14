import { ref } from "vue";
import { defineStore } from "pinia";
import Timesheet from "../models/timesheet";
import LineItem from "../models/lineitem"
import Services from "../services";


export const useTimesheetStore = defineStore("timesheet", () => {
    // convenience storage for loaded objects
    const currentTimesheet = ref<Timesheet | null>(null)
    const currentLineitems = ref<LineItem[]>([]);

    async function createTimesheet(timesheet: Timesheet): Promise<void> {
        const newTimesheet = (await Services.timesheet.create(timesheet)).data
        currentTimesheet.value = newTimesheet;
    }

    async function createLineitem(lineitem: LineItem): Promise<void> {
        const newLineitem = (await Services.lineitem.create(lineitem)).data
        currentLineitems.value.push(newLineitem)
    }

    async function saveTimesheet(): Promise<void> {
        const cts = currentTimesheet.value
        if (cts) {
            const savedTimesheet = (await Services.timesheet.save(cts)).data
            currentTimesheet.value = savedTimesheet

            const clis = currentLineitems.value
            const newclis: LineItem[] = []
            if (clis.length > 0) {
                clis.forEach(async item => {
                    const newItem = (await Services.lineitem.save(item)).data
                    newclis.push(newItem)
                });
                currentLineitems.value = newclis;
            }
        }
    }

    async function saveLineitem(id: string): Promise<void> {
        const savedItem = (await Services.lineitem.save(currentLineitems.value.filter((item) => item.id === id)[0] )).data
        const newLineItems = currentLineitems.value.filter((item) => item.id !== id)
        newLineItems.push(savedItem)
        currentLineitems.value = newLineItems
    }

    async function loadTimesheet(id: string): Promise<void> {
        const loadedTimesheet = (await Services.timesheet.get(id)).data
        const loadedLineitems = (await Services.timesheet.getLineitemsForTimesheet(id)).data.lineitems
        currentTimesheet.value = loadedTimesheet
        currentLineitems.value = loadedLineitems
    }

    async function deleteTimesheet(id: string): Promise<void> {
        await Services.timesheet.remove(id)
    }

    async function deleteLineItem(id: string): Promise<void> {
        await Services.lineitem.remove(id)
    }

    return {
        currentTimesheet,
        currentLineitems,
        createTimesheet,
        createLineitem,
        saveTimesheet,
        saveLineitem,
        loadTimesheet,
        deleteTimesheet,
        deleteLineItem
    }
})