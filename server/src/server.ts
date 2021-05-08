import express, {Express} from "express";
import dotenv from "dotenv";
import connect from "./db/connection";

dotenv.config();
const app: Express = express();
connect(app);

app.get("/", (req, res) => {
   res.send("Hello World!")
})