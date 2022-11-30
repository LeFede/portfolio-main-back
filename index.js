const mongoose = require("mongoose");
const express = require("express");
const app = express();

const string = `mongodb+srv://fede:fedefede@cluster9.lua1z.mongodb.net/portfolio?retryWrites=true&w=majority`;
mongoose.connect(string).then(() => {});

const domElement = mongoose.Schema(
  {},
  {
    collection: "elements",
  }
);

const Content = mongoose.model("en", domElement);

mongoose.connection.on("open", async function (ref) {
  console.log("Connected to mongo server.");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/en", async (req, res) => {
  const en = await Content.find({});
  res.send(en);
});

app.listen(8080, () => {});
