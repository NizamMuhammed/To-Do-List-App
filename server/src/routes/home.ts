import express from "express";
import mongoose from "mongoose";

let router = express.Router();

const todoSchema = new mongoose.Schema(   //creating a new MOngoose schema
  {
    title: {
      type: String,
      required: true  //String should be non-empty to be added to the List
     },
    createdAt: String,
  },
  {
    versionKey: false,
  }
);

const ToDo = mongoose.model("toDo", todoSchema);  //toDos is the collection name that will be generated

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
