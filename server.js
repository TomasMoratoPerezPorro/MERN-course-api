const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect database
connectDB();

//Test Endpoint
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

//Look for a enviroment variable or run locally by default
const PORT = process.env.PORT || 5000;

//Pass the port and run a callback
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
