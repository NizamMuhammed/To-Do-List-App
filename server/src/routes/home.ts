import express from "express";

let router = express.Router();
let app = express();
app.set("view engine", "ejs");
var items = ["Buy Milk", "Buy Groceries"];

router.get("/", function (req, res) {
  res.render("list", { Day: "Items to do", newItem: items });
});

router.get("/list", function (req, res) {
  res.send("list");
});

export default router;
