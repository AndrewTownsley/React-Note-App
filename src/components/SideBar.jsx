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
            <Search 
                handleSearchNote={setSearchText}
            />
            <NoteInput 
                handleTextChange={handleTextChange}
                noteText={noteText}
                saveNote={saveNote}
            />
        </div>
    )
}

export default SideBar;