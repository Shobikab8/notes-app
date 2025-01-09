import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewNotes from "./components/ViewNotes";
import HomePg from "./components/HomePg";


function App() {

  const [notesList, setNotesList] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  }
  );


  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notesList));
  }, [notesList]);


  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/"
          element={<HomePg notesList={notesList} setNotesList={setNotesList}/>}
        />
        
        <Route
          path="/add/:noteId?"
          element={<AddNote notesList={notesList} setNotesList={setNotesList} />}
        />
        <Route path="/view/:noteId"
        element={<ViewNotes notesList={notesList}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
