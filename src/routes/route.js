const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.sendFile("C:/Workspace/todo_list_mvc/src/view/index.html");
});

module.exports = routes;