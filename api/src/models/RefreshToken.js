const mongoose = require("mongoose")

const RefreshTokenSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("RefreshToken", RefreshTokenSchema);

