const TodoSchema = require("../models/todoModel");

// get all task 
exports.getTasks = async (req, res) => {
  try {
    const { todoId } = req.params;
    const checkTodoExists = await TodoSchema.findById(todoId);
    if (!checkTodoExists) throw new Error("no such todo exists");

    const todo = await TodoSchema.findById(todoId);
    const tasks = todo.tasks;
    res.status(200).json({
      success: true,
      message: "tasks successfully retrieved",
      tasks,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

// create task

exports.createTask = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { tasks } = req.body;
    console.log(tasks);
    const todo = await TodoSchema.findById(todoId);
    if (!todo) throw new Error("Todo doesn't exists");

    tasks.forEach((task) => {
      todo.tasks.push(task);
    });
    await todo.save();
    console.log(todo);

    res.status(200).json({
      success: true,
      message: "Task added successfully",
      todo,
    });
  } catch (error) {
    res.status(402).json({
      success: false,
      message: error.message,
    });
  }
};

// delete task

exports.deleteTask = async (req, res) => {
  const { todoId } = req.params;
  const { tasks } = req.body;
  console.log("Task is retreived", tasks);

  if (!todoId) {
    return res.status(400).json({
      success: false,
      message: "TodoId not doesn't exists",
    });
  }

  try {
    if (!tasks) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }
    const todo = await TodoSchema.findOne({ _id: todoId });
    todo.tasks.pull(tasks);
    await todo.save();
    console.log(todo);
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      todo,
    });
  } catch (error) {
    res.status(402).json({
      success: false,
      message: error.message,
    });
  }
};

