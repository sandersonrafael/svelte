<script lang="ts">
  import { notes } from "../stores/notes";
  import { v4 as uuid } from 'uuid';
  import type { Note } from "../types/Note";

  let noteContent: string;
  let storedNotes: Note[] = [];

  const createNote = () => {
    notes.update((currentNotes: Note[]) => [...currentNotes, { // update the writable variable
      id: uuid(),
      content: noteContent
    }]);
  };

  notes.subscribe((currentNote: Note[]) => { // used to read variable value
    storedNotes = [...currentNote];
  });
</script>

<form on:submit|preventDefault={createNote}>
  <textarea bind:value={noteContent} />
  <button type="submit">Criar</button>
</form>

{ #each storedNotes as note (note.id) }
  <div class="note">
    id: { note.id }<br>
    content: { note.content }
  </div>
{ /each }
