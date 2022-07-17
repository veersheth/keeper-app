import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(noteTitle, noteContent) {
    setNotes((prevNotes) => {
      return [...prevNotes, {title: noteTitle, content: noteContent}]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>

      {notes.map((note) => <Note title={note.title} content={note.content}/>)}

      <Footer />
    </div>
  );
}

export default App;
