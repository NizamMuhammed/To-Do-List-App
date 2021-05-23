import { toDoInterface } from "../types/toDoInterface";
import mongoose from "mongoose";

const todoSchema: mongoose.Schema = new mongoose.Schema(
  {
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
