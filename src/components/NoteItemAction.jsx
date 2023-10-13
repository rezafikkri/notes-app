export default function NoteItemAction({ id, onDelete }) {
  return (
    <div className="card-action p-2">
      <a href="#" className="btn btn-sm trash" onClick={(e) => onDelete(e, id)}>
        <i className="bi bi-trash"></i>
      </a>
      <a href="#" className="btn btn-sm archive"><i className="bi bi-archive"></i></a>
    </div>
  );
}
