const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer({ dest: 'uploads/' })
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const ObjectId = require('mongodb').ObjectId;



const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

app.use("/uploads", express.static("uploads"))

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@teamproject.1ksrmxp.mongodb.net/`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const database = client.db("student_council");
        const userCollection = database.collection("user");
        const contactCollection = database.collection("contactForm");
        const featureCollection = database.collection("features");
        const serviceCollection = database.collection("services");
        const heroContentCollection = database.collection("hero");
        const blogAndNewsCollection = database.collection("blogAndNews");
        const countryWithUniversityCollection = database.collection("countryWithUniversity");

        app.post('/service', upload.single('image'), async (req, res) => {
            try {
                const file = req.file;
                const { filename, path } = file;

                await serviceCollection.insertOne({ ...req.body, filename, path })

                const result = serviceCollection.find({})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    message: "Service added successfully",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to add service"
                })
            }
        });

        app.get('/service', async (req, res) => {
            try {
                const result = serviceCollection.find({})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

        app.post('/hero', upload.single('image'), async (req, res) => {
            try {
                const file = req.file;
                const { filename, path } = file;

                await heroContentCollection.insertOne({ ...req.body, filename, path })

                const result = heroContentCollection.find({})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    message: "Hero content added successfully",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to add hero content"
                })
            }
        });

        app.get('/hero', async (req, res) => {
            try {
                const result = heroContentCollection.find({})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

        app.delete("/hero", async (req, res) => {
            try {
                const { id } = req.query;

                await heroContentCollection.deleteOne({ _id: new ObjectId(id) })

                const result = heroContentCollection.find({})
                const cursor = await result.toArray();

                res.send({
                    status: "success",
                    message: "Hero content deleted successfully",
                    data: cursor
                })
            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to delete",
                })
            }
        })

        app.post('/blogAndNews', upload.single('image'), async (req, res) => {
            try {
                const file = req.file;
                const { filename, path } = file;

                await blogAndNewsCollection.insertOne({ ...req.body, filename, path })

                const result = blogAndNewsCollection.find({type: req.body.type})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    message: "Blog and News content added successfully",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to add Blog and News content"
                })
            }
        });

        app.get('/blogAndNews', async (req, res) => {
            try {
                const result = blogAndNewsCollection.find({})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

        app.get('/blog', async (req, res) => {
            try {
                const result = blogAndNewsCollection.find({type: "blog"})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

        app.get('/news', async (req, res) => {
            try {
                const result = blogAndNewsCollection.find({type: "news"})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Something went wrong"
                })
            }
        })

        app.delete("/blog", async (req, res) => {
            try {
                const { id } = req.query;

                await blogAndNewsCollection.deleteOne({ _id: new ObjectId(id) })

                const result = blogAndNewsCollection.find({type: "blog"})
                const cursor = await result.toArray();

                res.send({
                    status: "success",
                    message: "Guide and Resource content deleted successfully",
                    data: cursor
                })
            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to delete",
                })
            }
        })

        app.delete("/news", async (req, res) => {
            try {
                const { id } = req.query;

                await blogAndNewsCollection.deleteOne({ _id: new ObjectId(id) })

                const result = blogAndNewsCollection.find({type: "news"})
                const cursor = await result.toArray();

                res.send({
                    status: "success",
                    message: "News deleted successfully",
                    data: cursor
                })
            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to delete",
                })
            }
        })

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

        app.post('/country', upload.single('image'), async (req, res) => {
            try {
                const file = req.file;
                const { filename, path } = file;

                await countryWithUniversityCollection.insertOne({ ...req.body, filename, path })

                const result = countryWithUniversityCollection.find({})
                const cursor = await result.toArray()

                res.send({
                    status: "success",
                    message: "Country added successfully",
                    data: cursor
                })

            } catch {
                res.send({
                    status: "fail",
                    message: "Failed to add country"
                })
            }
        });
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