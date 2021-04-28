import express from "express";
import mongoose from "mongoose";

let router = express.Router();

const todoSchema = new mongoose.Schema(   //creating a new Mongoose schema
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

const ToDo = mongoose.model("toDo", todoSchema);  //toDos is the collection name that will be generated in AtlasDB

router.get("/", function (req, res) {
  ToDo.find({}, function (err, data) {
    res.render("list", { newItem: data });
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
  ToDo.deleteOne({ _id: req.body.id }, function (err) {
    if (!err) {
      console.log("Deleted");
    }
  });
  res.redirect("/home");
});


router.post("/update", function (req, res) {
  if(req.body.edited != 1) {
    ToDo.find({}, function (err, data) {
    res.render("update", { newItem: data, id: req.body.id });
    });
  }
  else {
    if(req.body.title != '')
    {
      ToDo.findOneAndUpdate({ _id: req.body.id }, 
      {title: req.body.title }, null, function (err, docs) {
        if (err){
          console.log(err)
        }
        else{
          console.log("Updated");
        }
      });
    }
    res.redirect("/home")
  }
});


export default router;
