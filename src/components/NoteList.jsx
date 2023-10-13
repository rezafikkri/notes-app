import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  if (notes.length > 0) {
    return (
      <div className="row align-items-stretch">
        {notes.map(note => (
          <div className="col-lg-4 mb-3" key={note.id}>
            <NoteItem {...note} onDelete={onDelete} />
          </div>
        ))}
      </div>
    );
  }
  return <p className="text-secondary text-center">Tidak ada catatan</p>
}
