import React from 'react'
import { nanoid } from "nanoid";
import Note from "./Note";


const PinnedNotes = ({titleState, note, deleteNote, pinNote, handlePinNote, pinnedNotesArray, setPinnedNotesArray}) => {
    return (
        <div>
            {
                pinnedNotesArray.map(note => {
                    return <Note 
                                key={nanoid()}
                                id={note.id}
                                note={note}
                                noteTitle={note.noteTitle}
                                titleState={titleState}
                                title={note.title}
                                category={note.category}
                                text={note.text}
                                deleteNote={deleteNote}
                           />
                })
            }
        </div>
    )
}

export default PinnedNotes
