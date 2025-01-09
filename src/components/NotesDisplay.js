import React from "react";
import { Link } from "react-router-dom";

const NotesDisplay = ({ note, index, deleteHandler }) => {
  const handleDelete = (e)=>{
      e.stopPropagation();
      e.preventDefault();
      deleteHandler(index);
  }
  return (
    <Link to={`/view/${index}`} style={{ textDecoration: "none" }}>
      {note && (
        <div id="note-title-container">
          <div id="note-title">{note.title}</div>
          <i onClick={handleDelete}
            className="trash alternate outline icon"
          ></i>
        </div>
      )}
    </Link>
  );
};

export default NotesDisplay;
