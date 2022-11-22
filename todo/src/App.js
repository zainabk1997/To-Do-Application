// Importing required libraries, noteService, todoForm, editForm, and todoList
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar/NavBar.js';
import TodoForm from './Container/TodoForm/TodoForm.js';
import './App.scss';
import TodoList from './Container/TodoList/TodoList.js';
import notesService from './Services/notesService.js';
import EditForm from './Container/EditForm/EditForm.js';

// Creating a function to display the todolist
const App = () => {

  // Intializing states to hide the forms, set the notes, and edit the notes
  const [hideCreateForm, setHideCreateForm] = useState(false);
  const [hideEditForm , setHideEditForm ] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  // updating notes after deleting using id
  const updateNotesAfterDeletion = (id) => {
    setNotes(notes.filter(n => n._id !== id));
  }

  // updating notes after clicking on edit by mapping the notes by id
  const updateNotesAfterUpdate = (note) =>{
    setNotes(notes.map(n =>{
      if(n._id === note._id)
          return note;
      else
          return n;
    }));
  }

  // Using useEffect to fetch all the notes on page laod
  useEffect(()=>{
    notesService.getAllNotes()
    .then(notes =>{
      setNotes(notes);
    })
  },[])

    // Rendering all components on the page
    return(
      <div>
        <div className='heading-app'>
        <NavBar></NavBar>
        </div>
        <div className='mainContainer'>
          {/* Adding a button to show and hide the Add Form */}
          <button type='button' className='btn-addShowForm' onClick={() => {
            setHideCreateForm(prev => !prev);
            // Toggling the hide edit form feature
            setHideEditForm(false);
            // Toggling the hide feature on add
          }}>{hideCreateForm? "Show notes list" :"Add a New ToDo" }</button>
          {/* Hiding and adding the form on button click */}
          {(hideCreateForm) && <TodoForm setHideCreateForm={setHideCreateForm} notes={notes} setNotes={setNotes}/>}
          {/* Showing the todoItems on the list by calling the todoList component */}
        {(!hideCreateForm && !hideEditForm) && <TodoList notes={notes} updateNotesAfterDeletion={updateNotesAfterDeletion} hideEditForm={hideEditForm} setHideEditForm={setHideEditForm} setNoteToEdit={setNoteToEdit} updateNotesAfterUpdate={updateNotesAfterUpdate}></TodoList>}
        {/* Showing the edit form and updating the tasks by calling the component */}
        {(hideEditForm) && <EditForm note={noteToEdit} setHideEditForm={setHideEditForm} updateNotesAfterUpdate={updateNotesAfterUpdate}></EditForm>}
        </div>
      </div>
      

    );

}

// Exporting the App to be called by index.js
export default App;
