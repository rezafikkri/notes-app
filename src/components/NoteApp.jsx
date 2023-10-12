import React from "react";
import NoteNavbar from "./NoteNavbar";
import NoteForm from "./NoteForm";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData()
    };
  }

  render() {
    return (
      <>
        <NoteNavbar />
        <div className="container">
          <div className="row justify-content-center note-create">
            <div className="col-lg-5">
              <h1 className="fs-3 mb-2 text-secondary-emphasis">Buat Catatan</h1>
              <NoteForm />
            </div>

            <div className="col-lg-10">
              <h1 className="fs-4 mt-5 mb-2 text-secondary-emphasis">Catatan Aktif</h1>
              <NoteList notes={this.state.notes} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
