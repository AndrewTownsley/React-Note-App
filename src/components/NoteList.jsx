import { nanoid } from "nanoid";
import Note from "./Note";


const NoteList = ({ notesArray, deleteNote}) => {

    return(
        <section className="notes-list">
            {notesArray.map((note) => {
              return  <Note 
                        key={nanoid()}
                        id={note.id}
                        note={note}
                        text={note.text}
                        deleteNote={deleteNote}
                      />
            })}
        </section>
    )
}

export default NoteList;