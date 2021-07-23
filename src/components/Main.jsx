import ReactMarkdown from "react-markdown";

const Main = () => {

    // Create a function that Edits the content of a note.
    // 

    return (
        <div className="main">
            <div className="main-note-input">
                <input type="text" id="title" placeholder="Title" autoFocus />
                <textarea name="body" id="body" placeholder="Write note here" cols="30" rows="10"></textarea>
            </div>
            <div className="mian-note-preview">
                <h1 className="preview-title">{ }</h1>
                <ReactMarkdown>
                    { }
                </ReactMarkdown>
            </div>
        </div>

    )
}

export default Main;