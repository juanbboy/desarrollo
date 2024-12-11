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
    img1: req.body.img1,
    img2: req.body.img2
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