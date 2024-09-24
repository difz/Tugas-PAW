const Note = require("../models/note_model")
exports.createNote = async (req, res) => {
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
exports.updateNote = async (req, res) => {
    try {
        await Note.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send();
    }
    catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getAllNotes = async (req, res) => {
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