import express, { Express } from "express";
import dotenv from "dotenv";
import connect from "./db/connection";
import router from "./routes/home";
import cors from "cors";

dotenv.config();
const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router);
connect(app);

app.get("/", (req, res) => {
  res.redirect("/home");
});
