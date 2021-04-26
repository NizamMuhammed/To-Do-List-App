import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT;

mongoose.connect(
  "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@todolistcluster.5f8dd.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected to DB!");
    }
  }
);

app.get("/", (req, res) => res.send("Yureka!!!!!"));

app.listen(port, () => {
  console.log(`Server is running at port ${port}...`);
});
