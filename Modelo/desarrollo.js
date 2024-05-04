const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let desarrollo = new Schema(
    {
        id: { type: String, },
        name: { type: String, },
        publisher: { type: String, },
        maquina: { type: String, },
        fecha_creacion: { type: Date, },
        fecha_entrega: { type: Date, },
        descripcion: { type: String, },
        estado: { type: String, },
        // crudo: { type: Schema.ObjectId, ref: "detalle" },
        // terminado: { type: Schema.ObjectId, ref: "detalle" }

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
        collection: "Desarrollo",
    }
);

module.exports = mongoose.model("desarrollo", desarrollo);