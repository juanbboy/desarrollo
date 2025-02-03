const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let maestro = new Schema(
    {
        COD: { type: Number, },
        NOM: { type: String, },
    },
    {
        collection: "Maestro",
    }
);

module.exports = mongoose.model("maestro", maestro);