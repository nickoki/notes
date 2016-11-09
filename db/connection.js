// db/connection.js

var mongoose = require("mongoose")

var NoteSchema = mongoose.Schema({
  title: String,
  content: String,
  date: Date
})

mongoose.model("Note", NoteSchema)
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/notes")

module.exports = mongoose
