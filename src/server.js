const mongoose = require('mongoose');
const app = require('./app');

const port = 5000;

// Databse connection
async function main() {
    try {
        await mongoose.connect('mongodb+srv://student_council:x6Rc652NL4cInzq4@cluster0.fcev8z1.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database connection successful")

        app.listen(port, () => {
            console.log(`Student Council listening on port ${port}`)
        })
    } catch {
        console.log("Failed to connect with database")
    }
}

main()


