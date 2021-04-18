var express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
var app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

MongoClient.connect(
  "mongodb+srv://mohammednizampn:Asterix2020@todolistcluster.5f8dd.mongodb.net/test?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  },
  function (err, client) {
    if (err) {
      return console.error(err);
    }
    console.log("Connected to Database");
    const db = client.db("test");
    const toDoList = db.collection("toDo");

    app.post("/quotes", function (req, res) {
      toDoList
        .insertOne(req.body)
        .then(function (result) {
          res.redirect("/");
        })
        .catch(function (error) {
          return console.error(error);
        });
    });

    app.get("/", function (req, res) {
      db.collection("toDo")
        .find()
        .toArray()
        .then(function (results) {
          res.render("index.ejs", { toDo: results });
          console.log(results)
        })
        .catch(function (error) {
          return console.error(error);
        });
    });
  }
);

app.listen(3000, function () {
  console.log("listening on 3000");
});
