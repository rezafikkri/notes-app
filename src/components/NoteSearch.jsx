export default function NoteSearch({ keyword, onSearch }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={onSearch}
      />
    </div>
  );
}
