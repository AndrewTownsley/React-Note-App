import NoteInput from "./NoteInput";
import NoteHistory from "./NoteHistory";

const SideBar = ({ 
    setSearchText, 
    handleTextChange, 
    noteText, 
    saveNote, 
    handleSearchNote,
    notesArray 
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
            />
        </div>
    )
}

export default SideBar;