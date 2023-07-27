import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(inputNote) {
    setNotes((prevNote) => {
      return [...prevNote, inputNote];
    })
    // console.log(notes);
  }

  function deleteNote(id) {
    // console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return id !== index;
      })
    })

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      })
      }

      <Footer />
    </div>
  );
}

export default App;
