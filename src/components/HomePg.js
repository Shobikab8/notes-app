import React from 'react'
import { Link } from 'react-router-dom'
import NotesDisplay from './NotesDisplay'

const HomePg = ({notesList, setNotesList}) => {

    const deleteHandler = (id)=>{
        const updateNotesList = notesList.filter((n, index)=> index!==id);
        setNotesList(updateNotesList);
      }

  return (
    <div>
              
        <h1 style={{display: "inline", lineHeight: 3}}>Notes App</h1>
        <button        
            style={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "6px",
                border: "none",
                padding: "8px 10px",
                marginLeft: 240
            }}
            >
            <Link to="/add" style={{ color: "white", textDecoration: "none" }}>
                Add Note
            </Link>
        </button>
        {notesList.length>0 && 
            <div id="container">
                {notesList.map((note, index) => (
                  <NotesDisplay note={note} key={index} index={index} deleteHandler={deleteHandler}/>
                ))}
            </div>}
    </div>
  )
}

export default HomePg
