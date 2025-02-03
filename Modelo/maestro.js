const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let desarrollo = new Schema(
    {
        COD: { type: Number, },
        NOM: { type: String, },
    },
    {
        collection: "Maestro",
    }
);

module.exports = mongoose.model("desarrollo", desarrollo);