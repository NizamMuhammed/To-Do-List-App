import express, { Express } from "express";
import dotenv from "dotenv";
import connect from "./db/connection";
import router from "./routes/home";
import cors from "cors";

/**
 * To get all the values from the .env file
 */
dotenv.config();
/**
 **Create a new Express App
 */
const app: Express = express();
/**
 ** Use CORS to give access to requests from multiple origins, like different IPs/localhosts
 */
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
