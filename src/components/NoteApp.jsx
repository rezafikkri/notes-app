import React from "react";
import NoteNavbar from "./NoteNavbar";
import { getInitialData } from "../utils";
import NoteFooter from "./NoteFooter";
import NoteMain from "./NoteMain";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: ''
    };

    // bind event handle method
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ keyword: e.target.value });
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
        <NoteNavbar onSearch={this.handleSearch} />
        <NoteMain
          notes={this.state.notes}
          keyword={this.state.keyword}
          onAddNote={this.handleAddNote}
          onDelete={this.handleDelete}
          onArchive={this.handleArchive}
        />
        <NoteFooter />
      </>
    );
  }
}
