const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MoongoDB is Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}
module.exports = connectDB;