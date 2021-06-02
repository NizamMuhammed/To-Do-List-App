import * as dotenv from "dotenv";
import { Express } from "express";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT;
const connect = (app: Express) => {
  /* Use mongoose.connect() to make a connection to MongoDB
   ** Use promises to listen at port else to throw Error
   */

  mongoose
    .connect(
      "mongodb+srv://" +
        process.env.DB_USER +
        ":" +
        process.env.DB_PASS +
        "@todolistcluster.5f8dd.mongodb.net/" +
        process.env.DB_NAME +
        "?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running at port ${port}...`);
      });
    })
    .catch((error) => {
      console.log("Connection Error");
      throw error;
    });
};

export default connect;
