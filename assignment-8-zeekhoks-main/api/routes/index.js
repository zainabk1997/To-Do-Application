// Using index.js file as a bible for all for all routes
import TodoListRouter from './todolist-routes.js';

// Using the export keyword to send the TodoListRouter
export default (app) => {
    app.use('/', TodoListRouter);
}

