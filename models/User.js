const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        requried: true,
    },
    lastName: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    investmentType: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model("user", UserSchema);
