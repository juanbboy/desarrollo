const express = require("express");
const ruta = express.Router();

let desarrollo = require("../Modelo/desarrollo");

ruta.get('/', (req, res) => {
  desarrollo.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});



const bcrypt = require("bcrypt");


ruta.post('/regdesarrollo', async (req, res, next) => {

  const ingreso = new desarrollo({
    id: req.body.id,
    name: req.body.name,
    publisher: req.body.publisher,
    maquina: req.body.maquina,
    fecha_creacion: req.body.fecha_creacion,
    fecha_entrega: req.body.fecha_entrega,
    descripcion: req.body.descripcion,
    estado: req.body.estado,
    tff1l1: req.body.tff1l1,
    tff1l2: req.body.tff1l2,
    tff1l3: req.body.tff1l3,
    tff1l4: req.body.tff1l4,
    tff1l5: req.body.tff1l5,
    tff1l6: req.body.tff1l6,
    tff1l7: req.body.tff1l7,
    tff1l8: req.body.tff1l8,
    tff1l9: req.body.tff1l9,
    tff1l10: req.body.tff1l10,
    tff1l11: req.body.tff1l11,
    tff2l1: req.body.tff2l1,
    tff2l2: req.body.tff2l2,
    tff2l3: req.body.tff2l3,
    tff2l4: req.body.tff2l4,
    tff2l5: req.body.tff2l5,
    tff2l6: req.body.tff2l6,
    tff2l7: req.body.tff2l7,
    tff2l8: req.body.tff2l8,
    tff2l9: req.body.tff2l9,
    tff2l10: req.body.tff2l10,
    tff2l11: req.body.tff2l11,
    tff3l1: req.body.tff3l1,
    tff3l2: req.body.tff3l2,
    tff3l3: req.body.tff3l3,
    tff3l4: req.body.tff3l4,
    tff3l5: req.body.tff3l5,
    tff3l6: req.body.tff3l6,
    tff3l7: req.body.tff3l7,
    tff3l8: req.body.tff3l8,
    tff3l9: req.body.tff3l9,
    tff3l10: req.body.tff3l10,
    tff3l11: req.body.tff3l11,
    tff4l1: req.body.tff4l1,
    tff4l2: req.body.tff4l2,
    tff4l3: req.body.tff4l3,
    tff4l4: req.body.tff4l4,
    tff4l5: req.body.tff4l5,
    tff4l6: req.body.tff4l6,
    tff4l7: req.body.tff4l7,
    tff4l8: req.body.tff4l8,
    tff4l9: req.body.tff4l9,
    tff4l10: req.body.tff4l10,
    tff4l11: req.body.tff4l11,
    tff5l1: req.body.tff5l1,
    tff5l2: req.body.tff5l2,
    tff5l3: req.body.tff5l3,
    tff5l4: req.body.tff5l4,
    tff5l5: req.body.tff5l5,
    tff5l6: req.body.tff5l6,
    tff5l7: req.body.tff5l7,
    tff5l8: req.body.tff5l8,
    tff5l9: req.body.tff5l9,
    tff5l10: req.body.tff5l10,
    tff5l11: req.body.tff5l11,
    tff6l1: req.body.tff6l1,
    tff6l2: req.body.tff6l2,
    tff6l3: req.body.tff6l3,
    tff6l4: req.body.tff6l4,
    tff6l5: req.body.tff6l5,
    tff6l6: req.body.tff6l6,
    tff6l7: req.body.tff6l7,
    tff6l8: req.body.tff6l8,
    tff6l9: req.body.tff6l9,
    tff6l10: req.body.tff6l10,
    tff6l11: req.body.tff6l11,
    tff7l1: req.body.tff7l1,
    tff7l2: req.body.tff7l2,
    tff7l3: req.body.tff7l3,
    tff7l4: req.body.tff7l4,
    tff7l5: req.body.tff7l5,
    tff7l6: req.body.tff7l6,
    tff7l7: req.body.tff7l7,
    tff7l8: req.body.tff7l8,
    tff7l9: req.body.tff7l9,
    tff7l10: req.body.tff7l10,
    tff7l11: req.body.tff7l11,
    tff8l1: req.body.tff8l1,
    tff8l2: req.body.tff8l2,
    tff8l3: req.body.tff8l3,
    tff8l4: req.body.tff8l4,
    tff8l5: req.body.tff8l5,
    tff8l6: req.body.tff8l6,
    tff8l7: req.body.tff8l7,
    tff8l8: req.body.tff8l8,
    tff8l9: req.body.tff8l9,
    tff8l10: req.body.tff8l10,
    tff8l11: req.body.tff8l11,
    tff9l1: req.body.tff9l1,
    tff9l2: req.body.tff9l2,
    tff9l3: req.body.tff9l3,
    tff9l4: req.body.tff9l4,
    tff9l5: req.body.tff9l5,
    tff9l6: req.body.tff9l6,
    tff9l7: req.body.tff9l7,
    tff9l8: req.body.tff9l8,
    tff9l9: req.body.tff9l9,
    tff9l10: req.body.tff9l10,
    tff9l11: req.body.tff9l11,
    tff10l1: req.body.tff10l1,
    tff10l2: req.body.tff10l2,
    tff10l3: req.body.tff10l3,
    tff10l4: req.body.tff10l4,
    tff10l5: req.body.tff10l5,
    tff10l6: req.body.tff10l6,
    tff10l7: req.body.tff10l7,
    tff10l8: req.body.tff10l8,
    tff10l9: req.body.tff10l9,
    tff10l10: req.body.tff10l10,
    tff10l11: req.body.tff10l11,
    tcf1l1: req.body.tcf1l1,
    tcf1l2: req.body.tcf1l2,
    tcf1l3: req.body.tcf1l3,
    tcf1l4: req.body.tcf1l4,
    tcf1l5: req.body.tcf1l5,
    tcf1l6: req.body.tcf1l6,
    tcf1l7: req.body.tcf1l7,
    tcf1l8: req.body.tcf1l8,
    tcf1l9: req.body.tcf1l9,
    tcf1l10: req.body.tcf1l10,
    tcf1l11: req.body.tcf1l11,
    tcf2l1: req.body.tcf2l1,
    tcf2l2: req.body.tcf2l2,
    tcf2l3: req.body.tcf2l3,
    tcf2l4: req.body.tcf2l4,
    tcf2l5: req.body.tcf2l5,
    tcf2l6: req.body.tcf2l6,
    tcf2l7: req.body.tcf2l7,
    tcf2l8: req.body.tcf2l8,
    tcf2l9: req.body.tcf2l9,
    tcf2l10: req.body.tcf2l10,
    tcf2l11: req.body.tcf2l11,
    tcf3l1: req.body.tcf3l1,
    tcf3l2: req.body.tcf3l2,
    tcf3l3: req.body.tcf3l3,
    tcf3l4: req.body.tcf3l4,
    tcf35: req.body.tcf35,
    tcf36: req.body.tcf36,
    tcf37: req.body.tcf37,
    tcf38: req.body.tcf38,
    tcf39: req.body.tcf39,
    tcf310: req.body.tcf310,
    tcf311: req.body.tcf311,
    tcf41: req.body.tcf41,
    tcf42: req.body.tcf42,
    tcf43: req.body.tcf43,
    tcf44: req.body.tcf44,
    tcf45: req.body.tcf45,
    tcf46: req.body.tcf46,
    tcf47: req.body.tcf47,
    tcf48: req.body.tcf48,
    tcf49: req.body.tcf49,
    tcf410: req.body.tcf410,
    tcf411: req.body.tcf411,
    tcf51: req.body.tcf51,
    tcf52: req.body.tcf52,
    tcf53: req.body.tcf53,
    tcf54: req.body.tcf54,
    tcf55: req.body.tcf55,
    tcf56: req.body.tcf56,
    tcf57: req.body.tcf57,
    tcf58: req.body.tcf58,
    tcf59: req.body.tcf59,
    tcf510: req.body.tcf510,
    tcf511: req.body.tcf511,
    tcf61: req.body.tcf61,
    tcf62: req.body.tcf62,
    tcf63: req.body.tcf63,
    tcf64: req.body.tcf64,
    tcf65: req.body.tcf65,
    tcf66: req.body.tcf66,
    tcf67: req.body.tcf67,
    tcf68: req.body.tcf68,
    tcf69: req.body.tcf69,
    tcf610: req.body.tcf610,
    tcf611: req.body.tcf611,
    tcf71: req.body.tcf71,
    tcf72: req.body.tcf72,
    tcf73: req.body.tcf73,
    tcf74: req.body.tcf74,
    tcf75: req.body.tcf75,
    tcf76: req.body.tcf76,
    tcf77: req.body.tcf77,
    tcf78: req.body.tcf78,
    tcf79: req.body.tcf79,
    tcf710: req.body.tcf710,
    tcf711: req.body.tcf711,
    tcf81: req.body.tcf81,
    tcf82: req.body.tcf82,
    tcf83: req.body.tcf83,
    tcf84: req.body.tcf84,
    tcf85: req.body.tcf85,
    tcf86: req.body.tcf86,
    tcf87: req.body.tcf87,
    tcf88: req.body.tcf88,
    tcf89: req.body.tcf89,
    tcf810: req.body.tcf810,
    tcf811: req.body.tcf811,
    tcf91: req.body.tcf91,
    tcf92: req.body.tcf92,
    tcf93: req.body.tcf93,
    tcf94: req.body.tcf94,
    tcf95: req.body.tcf95,
    tcf96: req.body.tcf96,
    tcf97: req.body.tcf97,
    tcf98: req.body.tcf98,
    tcf99: req.body.tcf99,
    tcf910: req.body.tcf910,
    tcf911: req.body.tcf911,
    tcf101: req.body.tcf101,
    tcf102: req.body.tcf102,
    tcf103: req.body.tcf103,
    tcf104: req.body.tcf104,
    tcf105: req.body.tcf105,
    tcf106: req.body.tcf106,
    tcf107: req.body.tcf107,
    tcf108: req.body.tcf108,
    tcf109: req.body.tcf109,
    tcf1010: req.body.tcf1010,
    tcf1011: req.body.tcf1011,
  })

  desarrollo.create(ingreso, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});


ruta.get("/edit-desarrollo/:id", (req, res) => {
  desarrollo.findById(req.params.id, (error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


ruta.put("/update-desarrollo/:id", (req, res, next) => {
  desarrollo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully updated!");
      }
    }
  );
});


ruta.delete("/deldesarrollo/:id", (req, res, next) => {
  desarrollo.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});


const jwt = require("jsonwebtoken")
module.exports = ruta;