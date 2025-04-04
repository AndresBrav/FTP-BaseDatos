const express = require('express');
const { Cobtenercarros,Cobteneruncarro,CeliminarCarro,CaniadirCarro,CactualizarCarro,CguardarArchivo,CguardarUnArchivo,CsubirServidor,CdevolverArchivoBase64,CconvertirBase64toFile } = require('../controllers/controllercarros');


const {validToken} = require("../middelwares/tokenValidator")

const rutasAutos = express.Router();

// rutasAutos.get("/",(req,res) => {
//     console.log("vamos a probar las rutas de los autos");
// })

rutasAutos.get('/', [validToken],Cobtenercarros);
//rutasAutos.get('/', [validToken],guardarCarrosPdf);

rutasAutos.get('/:id',[validToken], Cobteneruncarro);

rutasAutos.delete('/:id',[validToken], CeliminarCarro);

rutasAutos.post('/',[validToken], CaniadirCarro);

rutasAutos.put('/:id',[validToken] ,CactualizarCarro);

rutasAutos.post('/guardarPdf/lista',[validToken],CguardarArchivo)

rutasAutos.post('/guardarPdf/lista/:id',[validToken],CguardarUnArchivo)

rutasAutos.post("/guardarListaServidor",[validToken],CsubirServidor)

rutasAutos.post("/ArchivoBase64",[validToken],CdevolverArchivoBase64)

rutasAutos.post("/ConvertirBase64toFile",[validToken],CconvertirBase64toFile)

// rutasAutos.post("/guardarUnCarroServidor",[validToken],CsubirUnCarroServidor)



module.exports = rutasAutos;
