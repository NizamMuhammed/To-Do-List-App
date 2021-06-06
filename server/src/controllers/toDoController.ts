import express from "express";
import { toDoInterface } from "../types/toDoInterface";
import ToDo from "../models/toDoModel";
/*
 ** The functions to be executed when each route is called in routes folder files
 */
const getToDo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    /*
     ** Use mongoose functions to retrieve data from MongoDB and send it in JSON format as response
     ** The return is a promise of type void
     */
    const todos: toDoInterface[] = await ToDo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const createToDo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  ToDo.findOne({
    $or: [{ id: req.body.id }],
  }).then((res) => {
    if (res == null) {
      const toDo = new ToDo({
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed,
      });
      toDo.save();
    } else {
      console.log("Duplicate ID found in DB")
    }
  });

  res.redirect("/home");
};

const deleteToDo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  ToDo.deleteOne({ id: req.body.id }, function (err: any) {
    if (!err) {
      console.log("Deleted one item");
    } else {
      console.log("Error while deletion: " + err);
    }
  });
  res.redirect("/home");
};

const updateToDo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  ToDo.findOneAndUpdate(
    { id: req.body.id },
    { title: req.body.title },
    null,
    function (err, docs) {
      if (err) {
        console.log("Error while updation: " + err);
      } else {
        console.log("Updated");
      }
    }
  );
  res.redirect("/home");
};

const statusUpdate = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  ToDo.findOneAndUpdate(
    { id: req.body.id },
    { completed: req.body.completed },
    null,
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Status of item changed");
      }
    }
  );
  res.redirect("/home");
};

export { getToDo, createToDo, deleteToDo, statusUpdate, updateToDo };
