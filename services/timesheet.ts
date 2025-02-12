import http, { type Response } from "../api"
import Timesheet from "../models/timesheet"

async function get(id: string): Promise<Timesheet> {}
async function create(timesheet: Timesheet): Promise<void> {}
async function save(timesheet: Timesheet): Promise<void> {}
async function remove(id: string): Promise<void> {}
