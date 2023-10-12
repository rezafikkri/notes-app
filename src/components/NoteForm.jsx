import React from "react";

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="form-text mb-1 text-end">Sisa karakter: 50</div>
        <div className="form-floating mb-2">
          <input type="email" className="form-control" id="floatingInput" placeholder="Judul catatan" />
          <label htmlFor="floatingInput">Judul Catatan</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button type="button" className="btn btn-primary w-100 text-center">Buat</button>
      </form>
    );
  }
}
