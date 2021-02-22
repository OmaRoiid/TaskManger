const express = require("express");
const router = express.Router();
const Task = require("../db/model/task.model");

router.get("tasks/:listId/task", (req, res, next) => {
  Task.find({ _listid: req.params.id }).then((tasks) => {
    res.status(200).json({
      message: "Fetching all tasks",
      tasks: tasks,
    });
  });
});
router.get("tasks/:listId/task/:taskId", (req, res, next) => {
  Task.findOne({
    _id: req.params.taskId,
    _listid: req.params.listId,
  }).then((task) => {
    res.status(200).json({
      task: task,
    });
  });
});
router.post("tasks/:listId/newTask", (req, res, next) => {
  let newTask = new Task({
    title: req.body.title,
    _listid: req.params.listId,
  });

  newTask.save().then((newTaskDoc) => {
    res.status(201).json({
      message: "new Task Added",
      newTask: newTaskDoc,
    });
  });
});

router.put("tasks/:listId/updateTask/:taskId", (req, res, next) => {
  Task.findByIdAndUpdate(
    {
      _id: req.params.taskId,
      _listid: req.params.listId,
    },
    { $set: req.body }
  ).then(() => {
    res.status(200).json({
      message: "Task Updated",
    });
  });
});
router.delete("tasks/:listId/removeTask/:taskId", (req, res, next) => {
  Task.findOneAndRemove({
    _id: req.params.taskId,
    _listid: req.params.listId,
  }).then(() => {
    res.status(200).json({
      message: "Task Deleted",
    });
  });
});
module.exports = router;
