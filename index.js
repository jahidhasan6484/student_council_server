const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@teamproject.1ksrmxp.mongodb.net/`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const database = client.db("student_council");
        const contactCollection = database.collection("contact");

        app.post("/contact/applyNow", async (req, res) => {
            try {
                await contactCollection.insertOne(req.body)
                res.send({
                    status: "success",
                    message: "We will communicate with you very soon"
                })
            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Welcome to Student Council server");
});

app.listen(port, () => {
    console.log("Student Council server is running...");
});

  //npm run start-dev