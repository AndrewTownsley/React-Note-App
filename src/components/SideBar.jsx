import NoteInput from "./NoteInput";
import NoteHistory from "./NoteHistory";

const SideBar = ({ 
    handleTextChange, 
    handleTitleChange,
    noteText, 
    noteTitle,
    setTitleState,
    titleState,
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
                titleState={titleState}
                setTitleState={setTitleState}
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