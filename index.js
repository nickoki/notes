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

app.get("/api/notes", function(req, res) {
  Note.find({}).then(notes => {
    res.json( notes )
  })
})

app.post("/api/notes", function(req, res) {
  Note.create(req.body.note).then((note) => {
    res.redirect(`/#/notes/${note.title}`)
  })
})



app.get("/api/notes/:title", function(req, res) {
  var noteTitle = req.params.title
  Note.findOne({title: noteTitle}).then(note => {
    res.json(note)
  })
})


// update
app.post("/api/notes/edit/:title", function(req, res){
  var noteTitle = req.params.title
  Note.findOneAndUpdate({title: noteTitle}, req.body.note, {new: true})
})


app.listen(4000, () => {
  console.log("Running on port 4000");
})
