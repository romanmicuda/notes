import { useState } from 'react';
import './App.css';

function SideBar({notes, setNotes, handleClick}) {
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = (event) => {
    if (event.key === 'Enter'){
      setNotes((prevNotes)=>[...prevNotes,{title: event.target.value, text:""}])
      setInputValue('')
    }
  }
  
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <div>
      <h1>Sidebar</h1>
      {notes.map((note, index) => (
       <div onClick={() => handleClick(index)}>{note.title}</div>
      ))}
      <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  )
}

function Note({note, setNotes, selectedNoteIndex}) {
  const handleChange = (event) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes]
      newNotes[selectedNoteIndex] = {...newNotes[selectedNoteIndex], text: event.target.value}
    return newNotes
  })
  }
  return (
    <div>
      <h1>Notes</h1>
      <input type="text" value={note?.text || ''} onChange={handleChange}/>
    </div>
  )
}

function Notes() {
  const [notes, setNotes] = useState([{
    title: 'Note title 1', text: 'Note text 1'
  }])
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0)
  const handleClick = (index) => {
    setSelectedNoteIndex(index)
    console.log(index)
  }

  return (
    <div>
      <SideBar notes={notes} setNotes={setNotes} handleClick={handleClick}/>
      <Note note={notes[selectedNoteIndex]} selectedNoteIndex={selectedNoteIndex} setNotes={setNotes}/>
    </div>
  )
}


function App() {
  return (
    <div className="App">
        <Notes/>
    </div>
  );
}

export default App;
