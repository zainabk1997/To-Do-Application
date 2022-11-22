// Importing express and controllers
import express from "express";
import todolistController from "../controllers/todolist-controllers.js";

// Router object created of express 
const Router = express.Router();
    

// todoList Routes for tasks and taskIDs. The functions are called from the controller file and they are matched to the expected routes
Router.route("/tasks")
    .post(todolistController.create_task)
    .get(todolistController.all_tasks)
    .delete(todolistController.delete_all_tasks);

// Creating routes for id based api calls The functions are called from the controller file and they are matched to the expected routes
Router.route('/tasks/:id')
    .put(todolistController.update_tasks)
    .get(todolistController.get_task)
    .delete(todolistController.delete_tasks);

// Using the export keyword to export the Router object
export default Router;


