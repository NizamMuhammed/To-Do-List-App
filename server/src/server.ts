import express, {Express} from "express";
import dotenv from "dotenv";
import connect from "./db/connection";
import router from "./routes/home"

dotenv.config();
const app: Express = express();
app.use(router)
connect(app);

app.get("/", (req, res) => {
   res.redirect("/home")
})