import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from './components/NoteList';


function App() {
  const [notesArray, setNotesArray] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [searchText, setSearchText] = useState('');

// Write a function that creates a new Note Object, and adds the new Note Object to the notesArray.  Note should have an ID and text.  Then add the new note to the notesArray.  Then set the notesArray value to the newNotes array.
const createNote = () => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: noteText,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notesArray, newNote]
  setNotesArray(newNotes);
}

// Write a function that sets the value of the textarea as the noteText, 
// if the event.target.value.length >= 0.
const handleTextChange = (event) => {
    setNoteText(event.target.value)
  }
  
  
  // Write a function that calls the createNote() function, with noteText passed in as a parameter.
  // Then set the value of the noteText from the textarea to be BLANK, so that a new note can be created. 
  const saveNote = () => {
    createNote(noteText);
      setNoteText('');
}

const deleteNote = (id) => {
  const newNotes = notesArray.filter((note) => note.id !== id)
  setNotesArray(newNotes);
  console.log("clicked delete");
}



  return (
    <div className="App">
      <header className="search-header">
        <form onChange={(event) => setSearchText(event.target.value)} action="submit">
          <label htmlFor="note-search">
            <input type="text" name="search" id="search"/>
          </label>
        </form>
      </header>
        <div className="note-input">
          <div className="note-input-container">
          <h3>Create Note</h3>
            <textarea 
              onChange={handleTextChange}
              value={noteText} 
              rows="6" cols="20" 
              placeholder="Enter note here..." 
              name="note" 
              id="note-input" >
              </textarea>
            <div className="note-input-footer">
              <small>chars remaining</small>
              <button onClick={saveNote} className="save-btn">Save</button>
            </div>
          </div>
        </div>  
        <NoteList 
          notesArray={notesArray}
          deleteNote={deleteNote} />  
    </div>
  );
}

export default App;
