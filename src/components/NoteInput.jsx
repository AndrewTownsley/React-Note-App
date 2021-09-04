import { FaPlus } from "react-icons/fa"


const NoteInput = ({ handleTitleChange, handleTextChange, noteTitle, noteText, saveNote, setTitleState}) => {


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
                <div className="category-btn-container">
                  <button className="category-btn">Home</button>                
                  <button className="category-btn">Work</button>                
                  <button className="category-btn">Personal</button>
                </div>                
                <button type="submit" onClick={saveNote} className="save-btn">Save Note</button>
              </div>
        </div>
      </div>
    )
  }




export default NoteInput;