require("dotenv").config()
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

// esto es una buena practica preparar el servidor para nuestro puerto, 
// cuando hagamos el despliegue el host va a generar un numero de puerto en nuestras
// variables de entorno que estan en el archivo .env cuando este desplegado 
// si no esta desplegado debemos colocar el puerto a mano
// el q proveera la variable de entorno sino es 3001
const PORT = process.env.PORT || 3001;


const server = express();
server.use(express.json());
// lo transforma a un objeto de javascript
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});