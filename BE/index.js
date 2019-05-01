const mongoose = require("mongoose");
const posts = require("./routes/posts");
const express = require("express");
const app = express();
const cors = require("cors");
mongoose
  .connect(
    "mongodb://localhost:27017/posts",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

//app.use(proxy({target: 'http://www.accessgrantedonline.com'}));
// Then pass them to cors:
app.use(cors());
app.use(express.json());
app.use("/posts", express.static("posts"));
app.use("/api/posts", posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
