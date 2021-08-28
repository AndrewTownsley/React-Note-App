import { MdDeleteForever } from 'react-icons/md'

const Note = ({note, deleteNote}) => {
    return (
        <article className="note" id={note.id}>
              <h3>{note.title}</h3>
                <p>{note.text}</p>
                <div className="note-footer">
                  <p>{note.date}</p>
                  <MdDeleteForever className="delete-btn" onClick={() => deleteNote(note.id)}/>
                </div>
              </article>
        )
}

export default Note;