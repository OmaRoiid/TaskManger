const express = require("express");
const router = express.Router();
const List = require("../db/model/list.model");
/**
 * GET All lists from DB
 */
router.get("/lists", (req, res, next) => {
  List.find({}).then((lists) => {
    res.status(200).json({
      message: "Fetching all lists",
      lists: lists,
    });
  });
});
/**
 * POST new list to  DB
 */
router.post("/list", (req, res, next) => {
  let title = req.body.title;
  let newlist = new List({ title });
  newlist.save().then((listDoc) => {
    res.status(201).json({
      message: "List created Susscuflly",
      list: listDoc,
    });
  });
});
/**
 * Update Post  to  DB
 */
router.put("/edit/list/:id", (req, res, next) => {
  List.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.status(200).json({
      message: "List updated successfully",
    });
  });
});

/**
 * Delete Post from DB
 */
router.delete("/delete/list/:id", (req, res, next) => {
  List.findByIdAndRemove({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "List Deleted successfully",
    });
  });
});

module.exports = router;
