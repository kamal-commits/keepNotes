import React from 'react';

const Note = ({ item, deleteNote, id }) => {
  const deleteThisNote = () => {
    deleteNote(id);
  };
  return (
    <div className="text-center shadow p-3 mb-5 bg-white rounded note-item ml-2 h-75 w-75">
      <h2>{item.title}</h2>
      <p> {item.content} </p>
      <button className="btn btn-outline-danger" onClick={deleteThisNote}>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Note;
