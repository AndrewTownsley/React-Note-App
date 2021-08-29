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
                                title={note.title}
                                text={note.text}>
                                    <h3>{note.title}</h3>
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