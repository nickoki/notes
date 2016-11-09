// db/connection.js

var mongoose = require("mongoose")

var NoteSchema = mongoose.Schema({
  title: String,
  content: String,
  date: Date
})

var Note = mongoose.model("Note", NoteSchema)
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/notes")

module.exports = mongoose



// Seeding
Note.remove({}).then( () => {
  Note.create(
    {
      "title": "This is Post Number 1",
      "content": "Art party kale chips tacos flannel la croix vape. Semiotics bespoke sustainable, kogi direct trade enamel pin blue bottle hoodie gentrify health goth pinterest marfa umami iceland. VHS tilde live-edge, vice master cleanse listicle snackwave forage cardigan air plant thundercats heirloom salvia. Raclette iPhone ugh 90's paleo, blog hot chicken crucifix pickled bespoke whatever green juice franzen. Cardigan locavore offal, heirloom seitan synth yuccie knausgaard skateboard swag ennui.",
      "date": Date.now(),
    }, {
      "title": "Post number 2's title",
      "content": "Pok pok kickstarter dreamcatcher, irony offal drinking vinegar heirloom flannel swag. Master cleanse pinterest enamel pin, poutine migas 8-bit kinfolk. Austin portland enamel pin letterpress, small batch synth health goth deep v hammock VHS taxidermy lomo direct trade craft beer polaroid.",
      "date": Date.now(),
    }, {
      "title": "Trump was elected president... why?",
      "content": "Jean shorts knausgaard vaporware brunch, bushwick bitters meditation. Kitsch cray ethical pug. Bespoke hammock pok pok cray, irony ramps fam. Master cleanse hoodie poutine locavore, aesthetic tousled godard before they sold out typewriter raw denim live-edge poke everyday carry. Health goth unicorn pug franzen. Keffiyeh tofu photo booth, kogi crucifix heirloom four dollar toast butcher fap skateboard kinfolk. Gastropub polaroid coloring book direct trade 3 wolf moon.",
      "date": Date.now(),
    }
  )
})

// process.exit()
