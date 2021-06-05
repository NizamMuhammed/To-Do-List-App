import { toDoInterface } from "../types/toDoInterface";
import mongoose from "mongoose";

/*
 ** Create a new Schema using mongoose.Schema method
 ** A mongoose model is also created from the schema of type toDOInterface
 ** Todo, the name of model changes to todos(the plural format) and will be a collection in the DB
 ** timestamps are kept true to autocreate, createdAt and updatedAt timestamps in the DB
 */
const todoSchema: mongoose.Schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model<toDoInterface>("Todo", todoSchema);
