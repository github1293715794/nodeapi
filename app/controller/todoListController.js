// 前端控制层
const todoListRepository = require("../repository/todoListRepository");

exports.listAllTodos = function (req,res) {
  const todoList = todoListRepository.listAllTodos();
  res.json(todoList);// 发送一个json的响应
}