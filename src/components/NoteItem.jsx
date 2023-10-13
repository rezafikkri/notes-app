import NoteItemAction from "./NoteItemAction";
import NoteItemBody from "./NoteItemBody";

export default function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="card border-light-subtle h-100">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} onDelete={onDelete} />
    </div>
  );
}
