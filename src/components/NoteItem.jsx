import NoteItemAction from "./NoteItemAction";
import NoteItemBody from "./NoteItemBody";

export default function NoteItem({ id, title, body, createdAt  }) {
  return (
    <div className="card mb-3 border-light-subtle">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} />
    </div>
  );
}
