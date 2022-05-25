const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

const officeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("Office", officeSchema);