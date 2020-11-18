const mongoose = require("mongoose");
const config = require("config");

//Acess to the connection string stored in the config folder
const db = config.get("mongoURI");

//To connect to mongoDB we create an asyncronous arrow function as it returna a promise, and we set a try-catch block

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

//Export the function
module.exports = connectDB;
