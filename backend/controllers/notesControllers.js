
const Note = require('../models/note')

const fetchNotes = async (req, res) => {
  // 1. Get all notes from database.
  // 2. Send them as a response
  const notes = await Note.find();
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the notes using that id
  // 3. Send response with that note as the payload
  const noteId = req.params.id;
  // ------------------------------(1)
  const note = await Note.findById(noteId);
  // ------------------------------(2)
  res.json({ note: note });
  // ------------------------------(3)
};

const createNote = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create Note by passing data above into model Schema
  // 3. Respond with copy of new Note
  // const title = req.body.title;
  // const body = req.body.body;
  const {body} = req.body

  // ------------------------------(1)
  const note = await Note.create({
    title: title,
    body: body,
  });
  // ------------------------------(2)
  res.json({ note: note });
  // ------------------------------(3)
};

const updateNote = async (req, res) => {
  // 1.Get the id off the url
  // 2. Get the Data off the Body
  // 3. Find and update note
  // 4. Retrieve updatedNote and send it as a response

  const noteId = req.params.id;
  // ------------------------------(1)
  // const title = req.body.title;
  // const body = req.body.body;
const {title,body} = req.body
  // ------------------------------(2)
  const note = await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });
  // ------------------------------(3)
  const updatedNote = await Note.findById(noteId);
  res.json({ note: updatedNote });
  // ------------------------------(4)
};
const deleteNote = async (req, res) => {
  // 1. Get id off url
  // 2. Delete the record
  // 3. Send a Response to confirm deletion
  const noteId = req.params.id;
  // ------------------------------(1)
  await Note.deleteOne({
    id: noteId,
  });
  // ------------------------------(2)
  res.json({ success: "Record Deleted Successfully" });
  // ------------------------------(3)
};

module.exports = {
  fetchNote,
  fetchNotes,
  updateNote,
  createNote,
  deleteNote
};
