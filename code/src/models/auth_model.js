const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    usernameA: {
        type: String,
        required: true,
    },
    passwordA: {
        type: String,
        required: true,
    }
});


const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;