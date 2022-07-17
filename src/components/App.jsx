import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  function addNote(noteTitle, noteContent) {
    console.log(noteContent);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
