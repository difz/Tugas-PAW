const Note = require("../models/note_model")
const User = require("../models/user_model")
const Auth = require("../models/auth_model")

const createNote = async (req, res) => {
    try {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content,
            userID: req.body.userID,
        });
        await newNote.save();
        res.status(201).send(newNote);
    } catch (error) {
        res.status(400).send(error);
    }
}
const updateNote = async (req, res) => {
    try {
        await Note.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send();
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllNotes = async (req, res) => {
    try {
        // Filtering berdasarkan title dan userID
        const filter = {};
        if (req.query.title) {
            filter.title = req.query.title;
        }
        if (req.query.userID) {
            filter.userID = req.query.userID;
        }

        // Sorting berdasarkan timeCreate atau title
        let sort = {};
        if (req.query.sortBy) {
            const order = req.query.order === 'desc' ? -1 : 1; 
            sort[req.query.sortBy] = order;
        }

        const notes = await Note.find(filter).sort(sort);
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
}
const getNoteById = async (req, res) => {
    try {
        // Validasi ObjectId
        const noteId = req.params.noteID;

        // Cari catatan berdasarkan ID
        const note = await Note.findById(noteId);
        if (!note) {
            return res.status(404).send({ message: 'Note not found' });
        }

        res.status(200).send(note);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getNotesByUsername = async (req, res) => {
    try {
        // Cari user berdasarkan username
        const user = await Auth.findOne({ username: req.params.userID });
        console.log(user)
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Cari catatan berdasarkan userID
        const notes = await Note.find({ userID: req.params.userID});
        console.log(notes)
        if(!notes){
            res.status(404).send({message: 'Notes not found'})
        }
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
};
module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getAllNotes,
    getNotesByUsername,
    getNoteById,
};