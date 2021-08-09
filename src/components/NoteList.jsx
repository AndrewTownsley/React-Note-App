import React, { useState } from 'react';
import { nanoid } from "nanoid";
import Note from "./Note";


const NoteList = ({ notesArray, deleteNote}) => {

    return(
        <section className="notes-list">
            {notesArray.map((note) => {
              return  <Note 
                        key={nanoid()}
                        note={note}
                        deleteNote={deleteNote}
                      />
            })}
        </section>
    )
}

export default NoteList;