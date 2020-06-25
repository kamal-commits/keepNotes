import React, { useState } from 'react';

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const { title, content } = note;

  const handleChanges = (name) => (event) => {
    setNote({ ...note, [name]: event.target.value });
  };

  const addEvent = (event) => {
    event.preventDefault();
    props.addNote(note);
    setNote({ ...note, title: '', content: '' });
  };

  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-md-4 offset-md-4 shadow p-3 mb-5 bg-white rounded">
          <h2>Make Notes</h2>
          <form className="form-group mt-5">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={handleChanges('title')}
              className="form-control text-center"
            />

            <textarea
              name="content"
              id=""
              cols=""
              rows=""
              value={content}
              onChange={handleChanges('content')}
              className="form-control text-center"
              placeholder="Content"
            ></textarea>
            <br />

            <button className="btn btn-outline-primary w-50" onClick={addEvent}>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
