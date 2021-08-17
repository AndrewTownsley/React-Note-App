import NoteInput from "./NoteInput";
import Search from "./Search";

const SideBar = ({ 
    setSearchText, 
    handleTextChange, 
    noteText, 
    saveNote, 
    handleSearchNote }) => {

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
            {/* <Search 
                handleSearchNote={setSearchText}
            /> */}
            <NoteInput 
                handleTextChange={handleTextChange}
                noteText={noteText}
                saveNote={saveNote}
            />
        </div>
    )
}

export default SideBar;