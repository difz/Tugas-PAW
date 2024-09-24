const express = require("express");
const Note = require("../models/note_model");
const router = express.Router()
const {createNote, updateNote, deleteNote, getAllNotes, getNotesByUsername, getNoteById} = require("../controllers/note_control");


router.post("/create", createNote)
router.put("/update/:id", updateNote)
router.get ("/all", getAllNotes)
router.get ("/get/:userID", getNotesByUsername)
router.delete ("/delete/:id", deleteNote)
router.get("/gets/:noteID", getNoteById)

module.exports = router;