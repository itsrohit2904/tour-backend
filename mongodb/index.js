const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://admin:admin@cluster0.pvc7p.mongodb.net/tour_backend?retryWrites=true&w=majority&appName=Cluster0");
        console.log("database connected ", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;