// Importing required libraries
import './TodoForm.scss'
import React, { useState } from 'react'
import notesService from '../../Services/notesService';

// Creating a function to use the form component to add and save newly created values
const TodoForm = ({ setHideCreateForm, notes, setNotes, predefParams}) => {

    
    // Using a state where the values are empty in the form and will now be added to the form
    const [task, setTask] = useState({
        title : "",
        description : "",
        dueDate: "",
        dueTime: ""
    });

    // Change handling function that will add form values to the task array
    function handleChange(evt){
        const value = evt.target.value;
        setTask({
            ...task,
            [evt.target.name] : value
        })
    }

    // Function that saves the entered values into the database. An input validator has been defined that checks form values are not null.
    async function submitForm(event) {
        event.preventDefault();
        let inputsValid = true;
        document.querySelectorAll('.todoInput').forEach(input => {
            console.log(input.validity.valueMissing)
            if(input.validity.valueMissing){
                inputsValid = false;
                
            }
        })
        // If inputs are valid then the notes will get updated
        if(inputsValid){
            const createdNote = await notesService.createNote(task);
            setNotes(notes.concat(createdNote));
            setHideCreateForm(false);
        }
        else{
            window.alert("Please enter all the values!");
        }
        
    }

    
    return (
        // The form where all the values need to be created
        <div className='todo-form todo-form-hidden'>
            <form>   
                
                <div>
                    <label className='todoLabel'>Task Title : </label>
                    <input type="text" name='title' className='todoInput'
                        onChange={handleChange}
                        value={task.title} required />
                </div>
                
                {/* Todo description div */}
                <div>
                    <label className='todoLabel'>Task Description : </label>
                    <input type="text" name='description' className='todoInput'
                        onChange={handleChange}
                        value={task.description} required />
                </div>

                {/* Todo due date div */}

                <div>
                    <label className='todoLabel'>Task Due Date : </label>
                    <input type="date" name='dueDate' className='todoInput'
                    onChange={handleChange}
                    value={task.dueDate} required />
                </div>

                {/* Todo due time */}

                <div>
                    <label className='todoLabel'>Task Due Date : </label>
                    <input type="time" name='dueTime' className='todoInput'
                    onChange={handleChange}
                    value={task.dueTime} required />
                </div>

                {/* Button for saving todos */}
                <button className='btn-saveTodo' type='submit' onClick={submitForm}> Save To Do
                </button>
            </form>
        </div>

    )
}

// Exporting the function to be used in App.js
export default TodoForm;