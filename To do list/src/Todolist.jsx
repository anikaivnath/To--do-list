import React, { useState } from 'react';

const Todolist = () => {
  const [inputnote, setInputnote] = useState('');
  const [notes, setNotes] = useState([]);

  const changeNote = (e) => {
    setInputnote(e.target.value);
  };

  const addNote = () => {
    if (inputnote.trim() === '') {
      return alert('Please add something');
    }

    const newNote = {
      Title: inputnote,
    };

    setNotes([...notes, newNote]); 
    setInputnote(''); 
  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index,1); 
    setNotes(newNotes);
  };

  return (
    <div className="bg-indigo-950 w-5/12 h-auto justify-center m-auto px-8 rounded-3xl mt-16">
      <h1 className="text-3xl text-center pt-5 text-white">Get things Done</h1>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Input your task"
          value={inputnote}
          onChange={changeNote}
          className="border p-2 rounded"
        />
        <button onClick={addNote} className="bg-blue-800 text-white ml-2 p-2 rounded">
          Add task
        </button>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-white">Tasks</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index} className="mt-2 pb-2 flex m-auto justify-center">
              <p className="text-black bg-cyan-100 p-2 rounded text-center">{note.Title}</p>
              <button onClick={() => removeNote(index)} className="bg-blue-800 text-white ml-2 p-2 rounded">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
