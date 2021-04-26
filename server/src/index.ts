import express from "express";
import dotenv from "dotenv";
import connect from "./db/connection";
import router from "./routes/home";

dotenv.config();
let app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const port = process.env.PORT;
connect("test");
app.use("/home", router);

app.listen(port, () => {
  console.log(`Server is running at port ${port}...`);
});
