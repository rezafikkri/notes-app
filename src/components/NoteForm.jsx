import React from "react";

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleChrRemaining: 50
    };
  
    // bind event handle method
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const titleLimit = 50;
    let newTitle = e.target.value;
    let newTitleChrRemaining = titleLimit - newTitle.length;

    if (newTitleChrRemaining <= 0) {
      /* using substring is useful when the user paste a title more than 50 characters,
      then still enter the first 50 characters into the input */
      newTitle = newTitle.substring(0, titleLimit);
      newTitleChrRemaining = 0;
    }

    this.setState({ titleChrRemaining: newTitleChrRemaining });
    this.setState({ title: newTitle });
  }

  handleBodyChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onAddNote({
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: (new Date()).toISOString(),
    });
    
    // reset form
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-text mb-1 text-end">
          Sisa karakter: {this.state.titleChrRemaining}
        </div>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Judul catatan"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <label htmlFor="title">Judul</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="note"
            style={{height: '100px'}}
            onChange={this.handleBodyChange}
            value={this.state.body}
          ></textarea>
          <label htmlFor="note">Isi</label>
        </div>

        <button type="submit" className="btn btn-primary w-100 text-center">Buat</button>
      </form>
    );
  }
}
