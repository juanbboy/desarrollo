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
        tit_tabla: [{ type: Object }],
        crudo: [{ type: Object }],
        terminado: [{ type: Object }],
    },
    {
        collection: "Desarrollo",
    }
);

module.exports = mongoose.model("desarrollo", desarrollo);