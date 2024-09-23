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

const router = express.Router()

router.post("/add", verifyToken, addNote)
router.post("/edit/:noteID", verifyToken, editNote)
router.get ("/all", verifyToken, getAllNotes)
router.delete ("/delete/:noteID", verifyToken, updateNotePinned)
router.put ("/update-note-pinned/:noteID", verifyToken, updateNotePinned)
router.get("/search", verifyToken, searchNote)

export default router
