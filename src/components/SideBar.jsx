import NoteInput from "./NoteInput";
import NoteHistory from "./NoteHistory";

const SideBar = ({ 
    handleTextChange, 
    noteText, 
    saveNote, 
    handleSearchNote,
    notesArray,
    deleteNote
    }) => {

    return (
        <div className="sidebar">
              <header className="search-header">
                <label htmlFor="note-search">
                    <input 
                        onChange={(event) => handleSearchNote(event.target.value)} 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search Notes..."
                        />
                </label>
        </header>
            <NoteInput 
                handleTextChange={handleTextChange}
                noteText={noteText}
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