require("dotenv").config()
const mongoose = require('mongoose');

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL);
    console.log(`DataBase_Connected`)
}

module.exports = connectToDb