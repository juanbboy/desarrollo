const express = require("express");
const ruta = express.Router();

let desarrollo = require("../Modelo/desarrollo");
let medidas = require("../Modelo/medidas");

ruta.get('/', (req, res) => {
  desarrollo.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

ruta.get("/medidas", (req, res) => {
  medidas.find((err, medida) => {
    desarrollo.populate(medida, { path: "id" }, (err, medida) => {
      res.status(200).send(medida)
    });
  });
});

// ruta.get('/medidas', (req, res) => {
//   medidas.find((error, data, next) => {
//     id.populate(id, { path: "id" }, (error, res) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.json(data);
//       }
//     });
//   })
// });


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


ruta.post('/regmedidas', async (req, res, next) => {

  const ingreso = new medidas({
    detalle: req.body.detalle,
    cetme: req.body.cetme,
    plano: req.body.plano,
    cetme1: req.body.cetme1,
    plano1: req.body.plano1,
    cetme2: req.body.cetme2,
    plano2: req.body.plano2,
    cetme3: req.body.cetme3,
    plano3: req.body.plano3,
    id: req.body.id,
  })

  medidas.create(ingreso, (error, data) => {
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