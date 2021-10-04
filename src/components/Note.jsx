import { MdDeleteForever } from 'react-icons/md'
import { RiPushpin2Line } from 'react-icons/ri';


const Note = ({titleState, note, savePinnedNote, Note, deleteNote, pinNote, setPinNote, pinnedNotesArray, setPinnedNotesArray, handlePinNote}) => {



    return (
          <article className="note" id={note.id}>  
            <div className="note-header">
              <h3>{note.title.substring(0,30)}</h3>
              <RiPushpin2Line onClick={() => setPinNote(true)} className="pin-icon"/>
            </div>
            <p>{note.text.substring(0, 50)}</p>
            <div className="note-footer">
              <h5>{note.category}</h5>
              <p>{note.date}</p>
              <MdDeleteForever className="delete-btn" onClick={() => deleteNote(note.id)}/>
            </div>
          </article>
        )
    }
      
         


export default Note;



