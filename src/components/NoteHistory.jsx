import { nanoid } from "nanoid";
import { MdDeleteForever } from 'react-icons/md'



const NoteHistory = ({ notesArray, deleteNote}) => {

    return (
        <div className="note-history">
            <ul className="note-history-list">
                {notesArray.map((note) => {
                    return <li className="note-history-item"
                                key={nanoid()}
                                id={note.id}
                                text={note.text}>
                                    <p>{note.text}</p>
                                    <div className="note-footer">
                                        <p>{note.date}</p>
                                        <MdDeleteForever className="delete-btn" onClick={() => deleteNote(note.id)}/>
                                    </div>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default NoteHistory;