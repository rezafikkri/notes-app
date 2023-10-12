import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return (
    <div className="row">
      {notes.map(note => (
        <div className="col-lg-4" key={note.id}>
          <NoteItem {...note} />
        </div>
      ))}
    </div>
  );
}
