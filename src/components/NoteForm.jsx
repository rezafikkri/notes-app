import React from "react";

export default class NoteForm extends React.Component {
  // title character limit
  titleCharacterLimit = 50;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  
    // bind event handle method
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    let title = e.target.value;
    if (title.length > this.titleCharacterLimit) {
      title = title.substring(0, 50);
    }

    this.setState({ title });
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
          Sisa karakter: {this.titleCharacterLimit - this.state.title.length}
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
