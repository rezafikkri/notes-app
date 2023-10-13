import React from "react"

export default class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Cari catatan..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
      </form>
    );
  }
}
