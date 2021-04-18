const { MongoClient, Timestamp } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://mohammednizampn:Asterix2020@todolistcluster.5f8dd.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("toDo");

         // Construct a document                                                                                                                                                              
         let toDoDocument = {
             "id": 1,
             "title": "Sample Item",
             "description": "Sample Description",
             "createdTime": new Date(),
             "createdBy": "Nizam",
             "completed": false 
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(toDoDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);