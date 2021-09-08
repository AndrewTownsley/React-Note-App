import { FaPlus } from "react-icons/fa"


const NoteInput = ({ handleTitleChange, handleTextChange, noteTitle, noteText, saveNote, setTitleState, setCategory}) => {

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  }


    return (
        <div className="note-input">
        <div className="note-input-container">
          <h3>Create Note</h3>
              <label htmlFor="note-title">
                <button className="note-title-add-btn"><FaPlus/></button>
                <input
                 onChange={handleTitleChange} 
                 value={noteTitle} 
                 type="text" id="note-title" name="note-title" placeholder="Title..." 
                 autoComplete="off" 
                />
              </label>
              <textarea 
                onChange={handleTextChange}
                value={noteText} 
                rows="6" cols="20" 
                placeholder="Enter note here..." 
                name="note" 
                id="note-input"
                autoFocus={true} >
                </textarea>
              <div className="note-input-footer">
                <select onChange={handleCategoryChange} name="category" id="categorySelect">
                  <option value="">Category</option>
                  <option value="Work">Work</option>
                  <option value="School">School</option>
                  <option value="Home">Home</option>
                  <option value="Personal">Personal</option>
                </select>
              <button className="save-btn" onClick={saveNote}>Save</button>
              </div>
        </div>
      </div>
    )
  }




export default NoteInput;