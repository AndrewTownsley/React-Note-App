import NoteInput from "./NoteInput";
import NoteHistory from "./NoteHistory";

const SideBar = ({ 
    handleTextChange, 
    handleTitleChange,
    noteText, 
    noteTitle,
    setTitleState,
    titleState,
    setCategory,
    saveNote, 
    notesArray,
    deleteNote,
    pinNote
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
                setCategory={setCategory}
                saveNote={saveNote}
            />
            <NoteHistory
                notesArray={notesArray}
                deleteNote={deleteNote}
                pinNote={pinNote}
            />
        </div>
    )
}

export default SideBar;