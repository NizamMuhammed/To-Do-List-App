import express from "express";
import {
  getToDo,
  createToDo,
  deleteToDo,
  statusUpdate,
  updateToDo
} from "../controllers/toDoController";

const router = express.Router();

router.get("/home", getToDo);

router.post("/home", createToDo);

router.post("/home/delete", deleteToDo);

router.post("/home/status", statusUpdate);

router.post("/home/update", updateToDo);

export default router;
