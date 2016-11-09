// index.js

var express = require("express")
var mongoose = require("./db/connection")

var Note = mongoose.model("Note")

var app = express()

app.set("port", process.env.PORT || 4000)
app.use("/assets", express.static("public"))
app.use("/scripts", express.static("node_modules"))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/layout.html")
})

app.get("/api", function(req, res) {
  console.log("/api");
  Note.find({}).then(notes => {
    res.json( notes )
  })
})

app.listen(4000, () => {
  console.log("Running on port 4000");
})
