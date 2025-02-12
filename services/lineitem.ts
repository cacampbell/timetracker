import http, { type Response } from "../api"
import LineItem from "../models/lineitem"

async function get(id: string): Promise<LineItem> {}
async function create(lineitem: LineItem): Promise<void> {}
async function save(lineitem: LineItem): Promise<void> {}
async function remove(id: string): Promise<void> {}
