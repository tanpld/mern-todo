const Todo = require('./models');

exports.create = async (req, res, next) => {
  const { title } = req.body;
  try {
    const newTodo = new Todo({
      title: title,
    });
    await newTodo.save();
    return res.json(newTodo);
  } catch (err) {
    console.log('create >> ', err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    return res.json(todos);
  } catch (err) {
    console.log('getAll >> ', err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.todoId);
    await todo.remove();
    return res.json({ todoId: req.params.todoId });
  } catch (err) {
    console.log('delete >> ', err);
  }
};

exports.complete = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.todoId);
    todo.completed = !todo.completed;
    await todo.save();
    return res.json({ todoId: req.params.todoId, completed: todo.completed });
  } catch (err) {
    console.log('complete >> ', err);
  }
};
