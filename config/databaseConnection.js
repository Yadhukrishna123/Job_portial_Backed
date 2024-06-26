const mongoose = require("mongoose");
require("dotenv").config();  // Ensure environment variables are loaded



const databaseConnection = () => {
    mongoose.connect(process.env.DB_URI, {
        serverSelectionTimeoutMS: 5000  // Timeout after 5s instead of 10s
    })
    .then((data) => console.log(`Database connected with ${data.connection.host}`))
    .catch((err) => {
        console.error(`Error connecting to the database: ${err.message}`);
        console.error(err);
    });
};

module.exports = databaseConnection;
