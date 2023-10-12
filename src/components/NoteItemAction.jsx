export default function NoteItemAction({ id }) {
  return (
    <div className="card-action p-2">
      <a href="#" className="btn btn-sm trash"><i class="bi bi-trash"></i></a>
      <a href="#" className="btn btn-sm archive"><i class="bi bi-archive"></i></a>
    </div>
  );
}
