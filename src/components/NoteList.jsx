import { nanoid } from "nanoid";
import Note from "./Note";
import PinnedNotes from "./PinnedNotes";
import React, { useState, useEffect } from 'react';



const NoteList = ({ titleState, notesArray, deleteNote, handleSearchNote }) => {
    const [pinNote, setPinNote] = useState([]);
    const [pinnedNotesArray, setPinnedNotesArray] = useState([0])



    const handlePinNote = (note) => {
        setPinnedNotesArray((pinnedNotesArray) => [...pinnedNotesArray, pinnedNotesArray[pinnedNotesArray.length - 1] + 1])
        console.log(pinnedNotesArray);
        console.log('handlePinNote called');
      }


    return(
        <section className="notes-list-container">
            <div className="note-search">
                <label htmlFor="note-search">
                    <input 
                        onChange={(event) => handleSearchNote(event.target.value)} 
                        type="text" 
                        name="search" 
                        id="note-search" 
                        placeholder="Search Notes..."
                        />
                </label>
            </div>
            <div className="pinned-notes-container">
                <PinnedNotes
                    pinnedNotesArray={pinnedNotesArray}
                    setPinnedNotesArray={setPinnedNotesArray}
                />
            </div>
            <div className="notes-list">
                {notesArray.map((note) => {
                return  <Note 
                            key={nanoid()}
                            id={note.id}
                            note={note}
                            noteTitle={note.noteTitle}
                            titleState={titleState}
                            title={note.title}
                            category={note.category}
                            text={note.text}
                            deleteNote={deleteNote}
                            pinNote={pinNote}
                            handlePinNote={handlePinNote}
                        />
                })}
            </div>
        </section>
    )
}

export default NoteList;