import http, { type Response } from "../api"
import User from "../models/user"

async function get(id: string): Promise<User> {}
async function create(lineitem: User): Promise<void> {}
async function save(lineitem: User): Promise<void> {}
async function remove(id: string): Promise<void> {}
