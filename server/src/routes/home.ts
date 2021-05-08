import express from "express";
import { getToDo } from "../controllers/toDoController";

const router = express.Router();

router.get("/home", getToDo);

export default router;
