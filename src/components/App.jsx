import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])
  var keyCounter = 0

  function addNote(noteTitle, noteContent) {
    setNotes((prevNotes) => {
      return [...prevNotes, {key: keyCounter,  title: noteTitle, content: noteContent}]
    })
    keyCounter = keyCounter + 1
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;

// Implement the delete note functionality.
//-   DONE   Callback from the Note component to trigger a delete function.
//-   DONE   Use the filter function to filter out the item that needs deletion.
//-   DONE   Pass a id over to the Note component, pass it back to the App when deleting.


