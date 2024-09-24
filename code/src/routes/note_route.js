const express = require("express");
const Note = require("../models/note_model");
const router = express.Router()
const {createNote, updateNote, deleteNote, getAllNotes} = require("../controllers/note_control");


router.post("/note/create", createNote)
router.post("/note/:noteID", updateNote)
router.get ("/all", getAllNotes)
router.get ("/all/:userID", getNotesById)
router.delete ("/delete/:noteID", deleteNote)

module.exports = router;