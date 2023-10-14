import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function NoteMain({ notes, keyword, onAddNote, onDelete, onArchive }) {
  function filterNotes(notes, keyword, archived=false) {
    if (keyword === '') {
      return notes.filter(note => note.archived === archived);
    }
    return notes.filter(note => 
      note.title.toLowerCase().includes(keyword.toLowerCase()) && note.archived === archived
    );
  }

  return (
    <main className="container">
      <div className="row justify-content-center note-create">
        <div className="col-lg-5">
          <h1 className="fs-3 mb-2 text-secondary-emphasis">Buat Catatan</h1>
          <NoteForm onAddNote={onAddNote} />
        </div>

        <div className="col-lg-10">
          <h1 className="fs-4 mt-5 mb-2 text-secondary-emphasis">Catatan Aktif</h1>
          <NoteList
            notes={filterNotes(notes, keyword)}
            onDelete={onDelete}
            onArchive={onArchive}
          />

          <h1 className="fs-4 mt-5 mb-2 text-secondary-emphasis">Arsip</h1>
          <NoteList
            notes={filterNotes(notes, keyword, true)}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        </div>
      </div>
    </main>
  );
}
