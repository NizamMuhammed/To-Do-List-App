import * as dotenv from "dotenv";
import * as mongoose from "mongoose";

dotenv.config();
console.log(dotenv);
mongoose.connect(
    "mongodb+srv://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASS +
      "@todolistcluster.5f8dd.mongodb.net/test?retryWrites=true&w=majority",
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
