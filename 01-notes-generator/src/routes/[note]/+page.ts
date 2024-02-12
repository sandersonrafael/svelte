import { error, type LoadEvent } from "@sveltejs/kit";
import { notes } from "../../stores/notes"
import type { Note } from "../../types/Note";

export function load({ params }: LoadEvent) {
  let storedNote: Note | null = null;

  notes.subscribe((currentNotes: Note[]) => {
    const foundNote: Note | undefined = currentNotes.find((note) => note.id === params.note);

    if (foundNote) storedNote = foundNote;
  });

  if (!storedNote) throw error(404, 'Not Found');
  return {
    fruit: 'banana',
  };
}
