import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';


function App() {
  const [noteText, setNoteText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [notesArray, setNotesArray] = useState(() => {

    const savedNotes = localStorage.getItem("notes-app-data");
    const initialValue = JSON.parse(savedNotes);
    return initialValue || "";
  });

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
  console.log(notesArray);
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

useEffect(() => {
  localStorage.setItem("notes-app-data", JSON.stringify(notesArray))
}, [notesArray])


  return (
    <div className="App">
        <SideBar 
          handleSearchNote={setSearchText}
          handleTextChange={handleTextChange}
          noteText={noteText}
          saveNote={saveNote}
        />
        <NoteList 
          notesArray={notesArray.filter(note => note.text.toLowerCase().includes(searchText))}
          deleteNote={deleteNote} />  
    </div>
  );
}

export default App;
