const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let desarrollo = new Schema(
    {
        id: { type: String, },
        name: { type: String, },
        publisher: { type: String, },
        maquina: { type: String, },
        optenido: { type: String, },
        fecha_creacion: { type: Date, },
        fecha_entrega: { type: Date, },
        descripcion: { type: String, },
        estado: { type: String, },
        talla: { type: String, },
        tit_tabla: [{ type: Object }],
        crudo: [{ type: Object }],
        seguimiento: [{ type: Object }],
        terminado: [{ type: Object }],
        date: { type: Date },
        img1: { type: String, },
        img2: { type: String, },

    },
    {
        collection: "Desarrollo",
    }
);

module.exports = mongoose.model("desarrollo", desarrollo);