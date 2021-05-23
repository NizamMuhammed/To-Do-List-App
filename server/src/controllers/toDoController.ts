import express from "express";
import { toDoInterface } from "../types/toDoInterface";
import ToDo from "../models/toDoModel";

const getToDo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
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
  const toDo = new ToDo({
    title: req.body.title,
    completed: req.body.completed,
  });
  toDo.save();
  res.redirect("/home");
};

const deleteToDo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  ToDo.deleteOne({ _id: req.body.id }, function (err) {
    if (!err) {
      console.log("Deleted one item");
    }
  });
  res.redirect("/home");
};

const statusUpdate = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  ToDo.findOneAndUpdate(
    { _id: req.body.id },
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

export { getToDo, createToDo, deleteToDo, statusUpdate };
