const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let medidas = new Schema(
    {

        detalle: [{ type: Object }],
        cetme: [{ type: Object }],
        plano: [{ type: Object }],
        cetme1: [{ type: Object }],
        plano1: [{ type: Object }],
        cetme2: [{ type: Object }],
        plano2: [{ type: Object }],
        cetme3: [{ type: Object }],
        plano3: [{ type: Object }],
        id: { type: Schema.ObjectId, ref: "desarrollo" }

        // detalle: [{ type: Object }],
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