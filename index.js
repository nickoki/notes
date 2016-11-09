// index.js

var express = require("express")
var mongoose = require("./db/connection")
var Note = mongoose.model("Note")

var app = express()

app.set("port", process.env.PORT || 4000)
app.use("/assets", express.static("public"))

app.get("/", function(req, res) {
  Note.find({}).then(notes => {
    res.sendFile(__dirname + "/views/layout.html", {
      notes,
    })
  })
})

app.listen(4000, () => {
  console.log("Running on port 4000");
})
