// 数据访问层
const Todo = require("../model/todo");

let currentId = 0;

class TodoListRepository {
  constructor () {
    const todo1 = new Todo(++currentId, "todo1", "todo1 description");
    const todo2 = new Todo(++currentId, "todo2", "todo2 description");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  // 查：实现查看所有todo的方法
  listAllTodos () {
    return {
			err_code: 200,
			message: results,
			affextedRows: this.todoList
    }
    // 失败返回？
    // return this.todoList;
  }
  // 查：实现通过id查看具体todo的方法
  // 增：实现创建新todo记录的方法
  // 改：实现通过id和一个更新对象来更新todo记录的方法
  // 删：实现通过id来删除todo记录的方法
}

module.exports = new TodoListRepository();