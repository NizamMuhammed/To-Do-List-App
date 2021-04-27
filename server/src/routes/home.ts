import express from "express";
import mongoose from "mongoose";

let router = express.Router();

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
     },
    createdAt: String,
  },
  {
    versionKey: false,
  }
);

const ToDo = mongoose.model("toDo", todoSchema);

router.get("/", function (req, res) {
  ToDo.find({}, function (err, data) {
    res.render("list", { Day: "To-Do List", newItem: data });
  });
});

router.post("/", function (req, res) {
  let date = new Date().toLocaleString("en-IN");
  const toDo = new ToDo({
    title: req.body.item,
    createdAt: date,
  });
  toDo.save();
  res.redirect("/home");
});

router.post("/delete", function (req, res) {
  console.log(req.body.id);
  ToDo.deleteOne({ _id: req.body.id }, function (err) {
    if (!err) {
      console.log("Deleted");
    }
  });
  res.redirect("/home");
});

export default router;
