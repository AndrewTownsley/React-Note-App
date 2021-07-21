import './App.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  // Set state for note, setting notes.
  // Check for existing notes in local storage.  If notes in storage, parse them into json , if none, create empty array for new notes. 

  // Set state for Active note, setting active note. Set default to false.

  // Call useEffect hook 
  // Add new notes to local storage as json.

  // Create function that creates new note object.
  // id, title, body, date modified
  // update state with new note

  // Create function for deleting note
  // filter out notes that match the id of the note that is to be deleted

  // Create function for updating note

  // Create a function to set an active note to be modified
  // .find() the note that matches the id of the note to be activated.



  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
