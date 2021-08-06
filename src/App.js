import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import "./App.css";
// import NoteInput from "./components/NoteInput";

function App() {
  const [notesArray, setNotesArray] = useState([]);
  const [noteText, setNoteText] = useState("");

// Write a function that creates a new Note Object, and adds the new Note Object to the notesArray.
const createNote = () => {

}

// Write a function that sets the value of the textarea as the noteText, 
// if the event.target.value.length >= 0.

// Write a function that calls the createNote() function, with noteText passed in as a parameter.
// Then set the value of the noteText from the textarea to be BLANK, so that a new note can be created. 


  return (
    <div className="App">
      {/* Note Input  */}
        <div className="note-input note-card">
            <textarea 
              onChange={handleTextChange}
              value={noteText} 
              rows="8" cols="10" 
              placeholder="Enter note here..." 
              name="note" 
              id="note-input" />
            <small>chars remaining</small>
            <button onClick={createNote} className="save btn">Save</button>
        </div>  
        <section className="notes-list">
          {/* map over the notesArray, and create a new note DIV for each one */}
        </section>  
    </div>
  );
}

export default App;
