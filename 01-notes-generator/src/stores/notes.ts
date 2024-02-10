import { writable, type Writable } from "svelte/store";
import type { Note } from "../types/Note";

export const notes: Writable<Note[]> = writable<Note[]>([]);
