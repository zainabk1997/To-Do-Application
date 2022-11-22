// Importing required libraries
import './TodoList.scss'
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

// Setting up todoList component for hosting each todoItem. Contains props for update, hide, and edit to be passed to todoItem
const TodoList = ({notes, updateNotesAfterDeletion , updateNotesAfterUpdate, setHideEditForm, setNoteToEdit}) => {
    

    // Mapping each todoItem to the todoList
    return (
        <div className='todo-list'>
            {
                notes.map((note,index) => <TodoItem key={index} note={note} updateNotesAfterDeletion={updateNotesAfterDeletion}  updateNotesAfterUpdate={updateNotesAfterUpdate} setHideEditForm={setHideEditForm} setNoteToEdit={setNoteToEdit}></TodoItem>)
            }
        </div>
    );
}

// Exporting todoList to be used in App.js
export default TodoList;