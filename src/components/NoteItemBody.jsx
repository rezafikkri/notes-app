import { showFormattedDate } from "../utils";

export default function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="card-body">
      <h5 className="card-title fw-semibold">{title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary fw-light">{showFormattedDate(createdAt)}</h6>
      <p className="card-text">{body}</p> 
    </div>
  );
}
