const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    office: [
        { 
            type: Schema.Types.ObjectId,
            ref: 'Office'
        }],
    salary: {
        type: Number,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("Employee", employeeSchema);