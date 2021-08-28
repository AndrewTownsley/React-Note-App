import NoteInput from "./NoteInput";
import NoteHistory from "./NoteHistory";

const SideBar = ({ 
    handleTextChange, 
    handleTitleChange,
    noteText, 
    noteTitle,
    saveNote, 
    notesArray,
    deleteNote
    }) => {

    return (
        <div className="sidebar">
            <NoteInput 
                handleTextChange={handleTextChange}
                handleTitleChange={handleTitleChange}
                noteText={noteText}
                noteTitle={noteTitle}
                saveNote={saveNote}
            />
            <NoteHistory
                notesArray={notesArray}
                deleteNote={deleteNote}
            />
        </div>
    )
}

export default SideBar;