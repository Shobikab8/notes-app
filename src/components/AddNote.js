import React, { useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';

const AddNote = ({ notesList, setNotesList}) => {

  const {noteId} = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(()=>
    noteId? notesList[noteId] : { title: '', text: '' }
  ); 

  const updateNoteHandler = (key, value) => {
    setNote((prevNote) => ({ ...prevNote, [key]: value })); 
  };

  const doneHandler = () => {
    if (noteId) {
      
      const updatedNotes = notesList.map((n, index) =>
        index === parseInt(noteId) ? note : n
      );
      setNotesList(updatedNotes);  
    } 
    else {
      if(note.title.trim()!==''){
        setNotesList([...notesList, note]);
        navigate('/');
      }
      else{
        alert("Title cannot be empty");
      }
            
    }
  };

  

  return (
    <div id='notes-grid'>
      <div>
        <input
          id='title'
          placeholder='Enter title'
          onChange={(e) => updateNoteHandler('title', e.target.value)}
          value={note.title}
          maxLength={60}
        />
        <button
          onClick={doneHandler}
          id='done-btn'
        >
            Done
        </button>
      </div>
      

      <textarea
        id="inputField"
        placeholder='Enter note here...'
        onChange={(e) => updateNoteHandler('text', e.target.value)}
        value={note.text}
      />
      
      
    </div>
  );
};

export default AddNote;

