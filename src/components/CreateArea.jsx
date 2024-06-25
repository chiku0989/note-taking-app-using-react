import React from "react";

function CreateArea(props) {
  const [noteData, setNoteData] = React.useState({
    noteHeading: "",
    noteContent: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    props.addNote(noteData);
    setNoteData({
      noteHeading: "",
      noteContent: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="noteHeading"
          placeholder="Title"
          value={noteData.noteHeading}
        />
        <textarea
          onChange={handleChange}
          name="noteContent"
          placeholder="Take a note..."
          rows="3"
          value={noteData.noteContent}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
