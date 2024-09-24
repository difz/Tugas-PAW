const express = require("express");
const Note = require("../models/note_model");
const router = express.Router()
const {createNote, updateNote, deleteNote, getAllNotes, getNotesByUsername} = require("../controllers/note_control");


router.post("/note/create", createNote)
router.put("/update/:id", updateNote)
router.get ("/all", getAllNotes)
router.get ("/all/:userID", getNotesByUsername)
router.delete ("/delete/:noteID", deleteNote)

module.exports = router;