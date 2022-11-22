// Importing mongoDB and services to utilize in the controller files
import {response} from 'express';
import { set } from 'mongoose';
import todolistService from '../services/todolist-services.js';

// Setting response code values and saving it in a variable and showing it in json format
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// Setting error code values and saving it in a variable and showing it in json format
const setError = (error, response) => {
    response.status(500);
    response.json(error);
}

// Using the save function from the services file to create a new to do list task and saving it
const create_task = async (req, res) => {
    try {
        const todoTask = req.body;
        const savedTask = await todolistService.save(todoTask);
        setResponse(savedTask, res);
    } catch(error){
        setError(error, res);
    }
}

// Using the search function from the services file to fetch all the tasks in the todolist
const all_tasks = async(req,res) => {
    try {
        const allTasks = await todolistService.search({});
        setResponse(allTasks, res);
    } catch (error){
        setError(error,res);
    }
}

// Using the get function from the services file to get a task by the object id 
const get_task = async(req,res) => {
    console.log("In get_task function");
    try{
        const id = req.params.id;
        const getTask = await todolistService.get({_id: id});
        setResponse(getTask, res);
    } catch(error){
        setError(error,res);
    }
}

// Using the update function from the services file to update a task by the object id
const update_tasks = async(req,res) => {
    try{
        const updatedTask = {...req.body};
        const updateTask = await todolistService.update(updatedTask, req.params.id);
        setResponse(updateTask, res);
    } catch(error){
        console.log(error);
        setError(error,res);

    }
}

// Using the remove function from the services file to remove a task by the object id
const delete_tasks = async(req,res) => {
    try{
        const id = req.params.id;
        const deletedTask = {...req.body};
        deletedTask._id = id;
        const deleteTask = await todolistService.remove(deletedTask);
        setResponse(deleteTask, res);
    } catch(error){
        setError(error,res);
    }
}

// Deleting all tasks using the removeAllTasks function from the services file
const delete_all_tasks = async(req,res) => {
    try {
        const deleteTasks = await todolistService.removeAllTasks({});
        setResponse(deleteTasks, res);
    } catch (error){
        setError(error,res);
    }
}

// Exporting all operation functions using the export operator
export default {
    create_task: create_task,
    all_tasks : all_tasks,
    get_task : get_task,
    update_tasks: update_tasks,
    delete_tasks: delete_tasks,
    delete_all_tasks: delete_all_tasks
};