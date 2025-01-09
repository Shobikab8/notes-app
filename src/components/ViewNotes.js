import React from 'react'

import { Link, useParams } from 'react-router-dom';


const ViewNotes = ({notesList}) => {

    const { noteId } = useParams(); 
    const noteToView = notesList[noteId];

    // if (!noteToEdit) {
    //     return <div>Note not found</div>; 
    //   }
  return (
    <div id='view-div'>
        <Link to={`/add/${noteId}`}>
            <i className='edit alternate outline icon'/>
        </Link>
        <div id="view-div-text">
          <h2>{noteToView.title}</h2>
          <p id='view-text'>{noteToView.text}</p>
        </div>
        
    </div>
  )
}

export default ViewNotes
