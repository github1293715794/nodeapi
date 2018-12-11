module.exports = function (app) {
  const todoList = require("../controller/todoListController");

  app.route('/todos').get(todoList.listAllTodos);
  
}