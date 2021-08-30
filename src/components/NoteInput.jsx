
const NoteInput = ({ handleTitleChange, handleTextChange, noteTitle, noteText, saveNote, setTitleState}) => {


    return (
        <div className="note-input">
        <div className="note-input-container">
          <h3>Create Note</h3>
          <form action="submit">
              <label htmlFor="note-title">
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
                {/* <small>chars remaining</small> */}
                <button type="submit" onClick={saveNote} className="save-btn">Save Note</button>
              </div>
              </form>
        </div>
      </div>
    )
  }




export default NoteInput;