const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: String,
  
});
// Declares a new model Schema and its properties

const Note = mongoose.model("Note", noteSchema);
// Access to monggose variables to connect the Schema and our CRUD routes
    // ie: Note.find()

module.exports = Note;

// Schema?: We create Models for our data and funnel the instances of those models through the routes we created.
