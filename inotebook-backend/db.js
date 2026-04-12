const mongoose = require('mongoose');

const mongoURI = validateMongoURI(process.env.MONGO_URI) || "mongodb://localhost:27017/demo";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;