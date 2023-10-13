import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  if (notes.length > 0) {
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
  return <p className="text-secondary text-center">Tidak ada catatan</p>
}
