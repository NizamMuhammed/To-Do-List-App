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

export { getToDo };
