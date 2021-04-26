import express from "express";
import connection from "db/connection"

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Yureka!!!!!"));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});
