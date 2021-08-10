import NoteInput from "./NoteInput";
import Search from "./Search";

const SideBar = ({ setSearchText, handleTextChange, noteText, saveNote }) => {

    return (
        <div className="sidebar">
            <Search 
                setSearchText={setSearchText}
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