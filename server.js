const express = require("express");

const app = express();

//Test Endpoint
app.get("/", (req, res) => res.send("API Running"));

//Look for a enviroment variable or run locally by default
const PORT = process.env.PORT || 5000;

//Pass the port and run a callback
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
