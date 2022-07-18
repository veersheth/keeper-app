import React, { useState } from "react";

function CreateArea(props) {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function submitNote(event) {
    props.addNote(title, content)
    setTitle("")
    setContent("")
    event.preventDefault()
  }  

  return (
    <div>
      <form>
        <input
           name="title" 
           placeholder="Title" 
           value={title}
           onChange={(event) => setTitle(event.target.value)}
           className="textAreaTitle"
        />
             
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="textAreaContent"
        />
        
        <button
          onClick={submitNote}
        ><h1>+</h1></button>
      </form>
    </div>
  );
}

export default CreateArea;
