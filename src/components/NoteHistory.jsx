import { nanoid } from "nanoid";


const NoteHistory = ({ notesArray, deleteNote}) => {

    return (
        <div className="note-history">
            <ul className="note-history-list">
                {notesArray.map((note) => {
                    return <li className="note-history-item"
                                key={nanoid()}
                                id={note.id}
                                text={note.text}
                                deleteNote={deleteNote}>
                                    <p>{note.text}</p>
                                    <p>{note.date}</p>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default NoteHistory;