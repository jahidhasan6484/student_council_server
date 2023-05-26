const mongoose = require('mongoose');
const app = require('./app');

const port = 5000;

// Databse connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/student_council');
        console.log("Database connection successful")

        app.listen(port, () => {
            console.log(`Student Council listening on port ${port}`)
        })
    } catch {
        console.log("Failed to connect with database")
    }
}

main()


