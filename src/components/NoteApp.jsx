import React from "react";
import NoteNavbar from "./NoteNavbar";
import NoteForm from "./NoteForm";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteFooter from "./NoteFooter";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData()
    };

    // bind event handle method
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
  }

  filterNotes(notes, archived=false) {
    return notes.filter(note => note.archived === archived);
  }

  handleAddNote(newNote) {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        newNote
      ]
    }));
  }

  handleDelete(e, id) {
    e.preventDefault();

    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  }

  handleArchive(e, id) {
    e.preventDefault();

    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    }));
  }

  render() {
    return (
      <>
        <NoteNavbar />
        <div className="container">
          <div className="row justify-content-center note-create">
            <div className="col-lg-5">
              <h1 className="fs-3 mb-2 text-secondary-emphasis">Buat Catatan</h1>
              <NoteForm onAddNote={this.handleAddNote} />
            </div>

            <div className="col-lg-10">
              <h1 className="fs-4 mt-5 mb-2 text-secondary-emphasis">Catatan Aktif</h1>
              <NoteList
                notes={this.filterNotes(this.state.notes)}
                onDelete={this.handleDelete}
                onArchive={this.handleArchive}
              />

              <h1 className="fs-4 mt-5 mb-2 text-secondary-emphasis">Arsip</h1>
              <NoteList
                notes={this.filterNotes(this.state.notes, true)}
                onDelete={this.handleDelete}
                onArchive={this.handleArchive}
              />
            </div>
          </div>
        </div>
        <NoteFooter />
      </>
    );
  }
}
