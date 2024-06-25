import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = React.useState([]);

  function deleteNote(id) {
    setNoteList((prevNoteList) => {
      return prevNoteList.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        addNote={(newNote) =>
          setNoteList((prevNotes) => [...prevNotes, newNote])
        }
      />

      {noteList.map((note, index) => (
        <Note
          deleteNote={deleteNote}
          key={index}
          id={index}
          title={note.noteHeading}
          content={note.noteContent}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
