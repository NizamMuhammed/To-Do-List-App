import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connect from "./db/connection";

dotenv.config();
const app = express();
const port = process.env.PORT;
connect("test");

app.get("/", (req, res) => res.send("Yureka!!!!!"));

app.listen(port, () => {
  console.log(`Server is running at port ${port}...`);
});
