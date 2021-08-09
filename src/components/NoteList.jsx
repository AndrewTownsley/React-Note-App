import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md'
import { nanoid } from "nanoid";


const NoteList = ({ notesArray, deleteNote}) => {

    return(
        <section className="notes-list">
            {notesArray.map((note) => {
              return  <article className="note" key={nanoid()} id={note.id}>
                <p>{note.text}</p>
                <div className="note-footer">
                  <p>{note.date}</p>
                  <MdDeleteForever className="delete-btn" onClick={() => deleteNote(note.id)}/>
                </div>
              </article>
            })}
        </section>
    )
}

export default NoteList;