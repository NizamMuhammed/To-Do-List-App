import { Document } from "mongoose";
/**
 ** Created an Interface to be used as type for the Item Data
 */

export interface toDoInterface extends Document {
  title: string;
  completed: boolean;
}
