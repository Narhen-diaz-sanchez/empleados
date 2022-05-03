const mongoose = require("mongoose");

const URI = "mongodb+srv://usuario-electiva:electiva1@cluster0.dvdro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("db is connected"))
    .catch((err) => console.error(err));

module.exports = mongoose;