import { toDoInterface } from "../types/toDoInterface";
import mongoose from "mongoose";

const todoSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model<toDoInterface>("Todo", todoSchema);
