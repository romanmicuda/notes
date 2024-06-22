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
    <div className='sidebar'>
      {notes.map((note, index) => (
       <div onClick={() => handleClick(index)}>{note.title}</div>
      ))}
      <input type="text" placeholder={"Enter a title here..."} value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
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
    <div className='notes'>
      <textarea rows='30' className="full-size-input" type="text" placeholder={"Enter your notes here..."} value={note?.text || ''} onChange={handleChange}/>
    </div>
  )
}

function Notes() {
  const [notes, setNotes] = useState([{
    title: '', text: ''
  }])
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0)
  const handleClick = (index) => {
    setSelectedNoteIndex(index)
    console.log(index)
  }

  return (
    <div>
      <h1>Notes</h1>
    <div className='grid-container'>
      <SideBar notes={notes} setNotes={setNotes} handleClick={handleClick} />
      <Note note={notes[selectedNoteIndex]} selectedNoteIndex={selectedNoteIndex} setNotes={setNotes}/>
    </div>
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
