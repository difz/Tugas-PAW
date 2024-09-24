const express = require("express");
const Note = require("../models/note_model");
const router = express.Router()
const {createNote, updateNote, deleteNote, getAllNotes} = require("../controllers/note_control");


router.post("/", createNote)
router.post("/:noteID", updateNote)
router.get ("/", getAllNotes)
router.delete ("/:noteID", deleteNote)

module.exports = router;