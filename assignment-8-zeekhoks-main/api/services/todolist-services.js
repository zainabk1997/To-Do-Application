// Connecting model to services
import Task from '../models/index.js';

// Creating save function to create new task by creating newTask object and substituting lastModifiedDate
// Using asynchronous for each function
const save = async (task) => {
    task.lastModifiedDate = new Date();
    const newTask = new Task(task);
    return await newTask.save();
}

// Creating search function to get all todo list items using find operation of mongoDB
const search = (query) => {
    const tasks = Task.find(query).exec();
    return tasks;
};

// Creating get function to get a task by object id using the findOne operation of mongoDB
const get = async (_id) => {
    const getTask = await Task.findOne(_id).exec();
    return getTask;
}

// Creating update function to update item by object id using findOneAndUpdate operation 
const update = async (task, id) => {
    task.lastModifiedDate = new Date();
    const updateTask = await Task.findOneAndUpdate(id, task, { new: true }).exec();
    return updateTask;
}

// Creating remove function to remove a task by object id using findByIdAndRemove operation
const remove = async (task) => {
    const deleteTask = await Task.findByIdAndRemove(task._id, task).exec();
    return deleteTask;
}

// Creating remove function to remove all tasks using the deleteMany operation
const removeAllTasks = async (query) => {
    const deleteAllTasks = await Task.deleteMany(query).exec();
    return deleteAllTasks;
}

// Exporting all functions using export default
export default {
    save: save,
    search: search,
    get: get,
    update: update,
    remove: remove,
    removeAllTasks: removeAllTasks
};