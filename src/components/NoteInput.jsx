
const NoteInput = () => {

    return (
        <div className="note-input">
            <textarea  rows="8" cols="10" placeholder="Enter note here..." name="note" id="note-input" />
            <small onClick={createNote}>chars remaining</small>
            <button className="save btn">Save</button>
        </div>
    )
}

export default NoteInput;