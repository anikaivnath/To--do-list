import React from 'react'
import { useState } from 'react'

const Todolist = () => {
  const[inputnote,setInputnote]=useState("");
  const [notes,setNotes]= useState([]);

  const changeNote=(e)=>{
    setInputnote(e.target.value);
  }
  const addNote = () => {
    if (inputnote.trim()) {
      setNotes([...notes, inputnote]);
      setInputnote(""); // Clear the input field after adding the note
    }
  };

  

  return (
    <>
    
    <div className='bg-indigo-950 w-5/12 h-40 justify-center mt- 30px m-auto px rounded-3xl mt-40'>
    <h1 className='text-3xl text-center pt-5 px  text-white '>Get things Done</h1>
    <div className='flex justify-center mt-4 rounded-   '>
    <input
          type='text'
          placeholder='Input your task'
          value={inputnote}
          onChange={changeNote}
          className='border p-2'
        />
           <button onClick={addNote} className='bg-blue-800 text-white ml-2 p-2'>
          Add task
        </button>
    </div>
    
    <div className='text-center'>
    <h2  className='text-white'>Notes</h2>
    <ul>
      {notes.map((note ,index)=>(
        
          <li key={index}>
          <p className='text-black ba'>{note}</p>
          
          </li>
        
      ))}
    </ul>
    </div>
    </div> 
   


    </>
  )
}

export default Todolist