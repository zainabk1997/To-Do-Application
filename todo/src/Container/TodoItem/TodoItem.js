// Importing required libraries
import './TodoItem.scss';
import React, { useState } from 'react';
import notesService from '../../Services/notesService';

// Initializating a todoitem component which sits on top of todolist. Sending various props from the app.js to todoitem.
const TodoItem = ({note, updateNotesAfterDeletion, updateNotesAfterUpdate, setHideEditForm, setNoteToEdit}) => {

    // Defining show and hide, current note for delete, complete task for the completed status, and edit task functionalities.
    const [showDetails, setShowDetails] = useState(false);
    const [currNote, setCurrNote] = useState(note);
    const deleteTask = async (note)=>{
        const deletedNote = await notesService.deleteNote(note);
        updateNotesAfterDeletion(deletedNote._id);
    }
    const completeTask = async () =>{
        const updatedNote = await notesService.updateNote({
            ...currNote,
            completed: !currNote.completed
        }) 
        setCurrNote(updatedNote);
        updateNotesAfterUpdate(updatedNote);
    }

    const editTask = ()=>{
        setHideEditForm(true);
        setNoteToEdit(note);
    }
    return (

        // Checking if the note is completed
        <div className={"item " + (currNote.completed ? "completed" : "")}>
            {/* If the task is completed, then strike through when the checkbox is clicked */}
            <input type='checkbox' className='task-checkbox' onChange={completeTask} checked={currNote.completed}></input>
                <span>{currNote.title}</span>
                <div className="buttons-list">
                    {/* Buttons defined for details, edit task, and delete task which call specific props onClick*/}
                    <button className="button-detail btn-style" id="detailBtn" onClick={ ()=> setShowDetails(!showDetails)}>Details</button>
                    <button className='button-update btn-style'  id="updateBtn" onClick={editTask}>Edit</button>
                    <button className='button-delete btn-style'  id="deleteBtn" onClick={() => deleteTask(currNote)}>Delete</button>
                </div>
          
            
            {   

            // Adding showDetails functionality
                showDetails 
                ? 
                <div className="details">
                    <ul>
                        <li><p><b>Task Description : </b> {currNote.description}</p></li>
                        <li><p><b>Task Due Date : </b> {currNote.dueDate.substring(0,note.dueDate.indexOf('T'))}</p></li>
                        <li><p><b>Task Due Time : </b> {currNote.dueTime}</p></li>
                        <li><p><b>Task Created At Time : </b> {currNote.createdAt}</p></li>
                        <li><p><b>Task Updated At Time : </b> {currNote.updatedAt}</p></li>

                    </ul>
                </div> 
                : 
                <></>
            }

            
            

            
            
        </div>


    );
}

// Export the todoItem to be used in TodoList and App.js
export default TodoItem;