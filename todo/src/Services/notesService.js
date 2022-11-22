// Services file initialized to interact with the API

// getAllNotes to obtain the tasks from the database
const getAllNotes = async ()=>{
    const response = await fetch("http://localhost:8080/tasks");
    const notes = await response.json();
    return notes;
}

// createNote uses POST to save a task to the database
const createNote = async (task)=>{
    const response = await fetch("http://localhost:8080/tasks",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    return await response.json();
}

// deleteNote uses DELETE to delete a task from the database
const deleteNote = async (task) => {
    console.log('In delete');
    const response = await fetch("http://localhost:8080/tasks/"+task._id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

// updateNote uses PUT to update the task in the database
const updateNote = async (task)=>{
    const response = await fetch("http://localhost:8080/tasks/"+task._id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    return await response.json();
}

// exporting the functions to be used in App.js
export default { getAllNotes, createNote, deleteNote, updateNote }