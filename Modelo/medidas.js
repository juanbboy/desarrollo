const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let medidas = new Schema(
    {
        detalle: { type: String, },
        cetme: { type: String, },
        plano: { type: String, },
        cetme1: { type: String, },
        plano1: { type: String, },
        cetme2: { type: String, },
        plano2: { type: String, },
        cetme3: { type: String, },
        plano3: { type: String, },
        id: { type: Schema.ObjectId, ref: "_id" }

        // detalle: { type: String },
        // cetme: { type: Number },
        // plano: { type: Number },
        // cetme1: { type: Number },
        // plano1: { type: Number },
        // cetme2: { type: Number },
        // plano2: { type: Number },
        // cetme3: { type: Number },
        // plano3: { type: Number },
    },
    {
        collection: "medidas",
    }
);

module.exports = mongoose.model("medidas", medidas);