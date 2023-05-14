const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const ObjectId = require('mongodb').ObjectId;

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // specify the directory to store uploaded files



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
        const userCollection = database.collection("user");
        const contactCollection = database.collection("contactForm");
        const featureCollection = database.collection("features");
        // const contentCollection = database.collection("content");

        // app.post('/services/upload', upload.single('image'), async (req, res) => {
        //     try {
        //         const data = req.body;
        //         const image = req.file;

        //         await contentCollection.insertOne({ ...data, image })
        //         const getAllService = contentCollection.find({})
        //         const cursor = await getAllService.toArray();

        //         res.send({
        //             status: "success",
        //             data: cursor,
        //             message: "Service uploaded successfully!"
        //         });
        //     } catch {
        //         res.send({
        //             status: "fail",
        //             message: "Failed to upload service!"
        //         })
        //     }
        // });


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

        // app.post('/admin', async (req, res) => {
        //     try {
        //         const { userName, password } = req.body;


        //         bcrypt.hash(password, saltRounds, async (err, hash) => {
        //             if (err) {
        //                 res.send({
        //                     status: "fail",
        //                     message: "Something went wrong"
        //                 })
        //             } else if (hash) {
        //                 const newData = {
        //                     ...req.body,
        //                     password: hash
        //                 }

        //                 await userCollection.insertOne(newData)

        //                 res.send({
        //                     status: "success",
        //                     message: "We will communicate with you very soon"
        //                 })
        //             }

        //         })


        //     } catch {
        //         res.send({
        //             status: "fail",
        //             message: "Something went wrong"
        //         })
        //     }
        // })

        app.get("/admin", async (req, res) => {
            try {
                const result = contactCollection.find({})
                const cursor = await result.toArray()
                res.send({
                    status: "success",
                    data: cursor.reverse()
                })

            } catch {
                res.send({
                    status: "fail"
                })
            }
        })

        app.get('/students', async (req, res) => {
            try {
                const students = userCollection.find({ role: "student" })
                const cursor = await students.toArray()
                res.send({
                    status: "success",
                    data: cursor.reverse()
                })
            } catch {
                res.send({
                    status: "fail"
                })
            }
        })

        app.get('/counselors', async (req, res) => {
            try {
                const students = userCollection.find({ role: "counselor" })
                const cursor = await students.toArray()
                res.send({
                    status: "success",
                    data: cursor.reverse()
                })
            } catch {
                res.send({
                    status: "fail"
                })
            }
        })

        app.get('/login', async (req, res) => {
            try {
                const { userName, password } = req.query;

                const user = await userCollection.findOne({ userName: userName })

                if (!user) {
                    res.send({
                        status: "fail",
                        message: "No user found"
                    })
                } else if (user) {
                    const match = await bcrypt.compare(password, user.password);
                    if (match) {
                        res.send({
                            status: "success",
                            message: "Login successfull",
                            data: user
                        })
                    } else {
                        res.send({
                            status: "fail",
                            message: "Invalid password"
                        })
                    }
                }

            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong!"
                })
            }
        })

        app.post('/register', async (req, res) => {
            try {
                const { password } = req.body;

                bcrypt.hash(password, saltRounds, async (err, hash) => {
                    if (err) {
                        res.send({
                            status: "fail",
                            message: "Something went wrong"
                        })
                    } else if (hash) {
                        const newData = {
                            ...req.body,
                            password: hash
                        }

                        await userCollection.insertOne(newData)

                        res.send({
                            status: "success",
                            message: "Successfully"
                        })
                    }

                })


            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

        app.post("/feature", async (req, res) => {
            try {

                await featureCollection.insertOne(req.body)
                const result = featureCollection.find({})
                const cursor = await result.toArray();

                res.send({
                    status: "success",
                    message: "Feature added successfully",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to add feature"
                })
            }
        })

        app.get("/feature", async (req, res) => {
            try {
                const result = featureCollection.find({})
                const cursor = await result.toArray();

                res.send({
                    status: "success",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail"
                })
            }
        })

        app.delete("/feature", async (req, res) => {
            try {
                const { id } = req.query;

                await featureCollection.deleteOne({ _id: new ObjectId(id) })

                const result = featureCollection.find({})
                const cursor = await result.toArray();

                res.send({
                    status: "success",
                    message: "Feature deleted successfully",
                    data: cursor
                })
            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to delete",
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