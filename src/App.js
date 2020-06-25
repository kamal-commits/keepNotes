import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import Footer from './Components/Footer';

function App() {
  const [noteItem, setNoteItem] = useState([]);
  const addNote = (note) => {
    setNoteItem([...noteItem, note]);
    console.log(note);
  };

  const deleteNote = (id) => {
    //
    console.log(id);

    setNoteItem((currentItem) =>
      currentItem.filter((data, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div className="container-fluid">
      <Header />
      <CreateNote addNote={addNote} />
      <div className="row">
        {!noteItem
          ? null
          : noteItem.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Note item={item} id={index} deleteNote={deleteNote} />
              </div>
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
