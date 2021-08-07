import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import "./App.css";
// import NoteInput from "./components/NoteInput";

function App() {
  const [notesArray, setNotesArray] = useState([]);
  const [noteText, setNoteText] = useState('');

// Write a function that creates a new Note Object, and adds the new Note Object to the notesArray.  Note should have an ID and text.  Then add the new note to the notesArray.  Then set the notesArray value to the newNotes array.
const createNote = (text) => {
  const newNote = {
    id: nanoid(),
    text: noteText,
  }
  const newNotes = [...notesArray, newNote]
  setNotesArray(newNotes);
  console.log(notesArray);
}

// Write a function that sets the value of the textarea as the noteText, 
// if the event.target.value.length >= 0.
const handleTextChange = (event) => {
    setNoteText(event.target.value)
    console.log(event.target.value);
  }
  
  
  // Write a function that calls the createNote() function, with noteText passed in as a parameter.
  // Then set the value of the noteText from the textarea to be BLANK, so that a new note can be created. 
  const saveNote = () => {
    createNote(noteText);
      setNoteText('');
}



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
              id="note-input" >
              </textarea>
            <small>chars remaining</small>
            <button onClick={saveNote} className="save btn">Save</button>
        </div>  
        <section className="notes-list">
          <ul>
            {notesArray.map((note) => {
              return  <div key={nanoid()}>
                <p>{note.text}</p>
              </div>
            })}
          </ul>
        </section>  
    </div>
  );
}

export default App;
