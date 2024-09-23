import express from "express"
import { verifyToken } from "../utils/verifyUser.js"
import {
    addNote,
    deleteMote,
    editNote,
    getAllNotes,
    searchNote,
    updateNotePinned,
} from "../controllers/note.controller.js"
import { verify } from "jsonwebtoken"
import { createNote, updateNote } from "../controllers/note_control.js"

const router = express.Router()

router.post("/add", createNote)
router.post("/edit/:noteID", updateNote)
router.get ("/all", getAllNotes)
router.delete ("/delete/:noteID", deleteNote)

export default router
