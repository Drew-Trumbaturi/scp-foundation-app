const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// Get driver connection
const dbo = require("./db/conn");

const myParser = require("body-parser");

app.use(express.json({ limit: "1GB" }));
app.use(express.urlencoded({ limit: "1GB", extended: true }));

app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}
