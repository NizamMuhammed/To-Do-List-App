import { Document } from "mongoose"

export interface toDoInterface extends Document {
  title: string
  status: boolean
}