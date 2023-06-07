const express = require("express");

const cors = require("cors")

const app = express(); 

const PORT = 5432; // puerto de comunicacion  ///8000

const db = require("./utils/database"); //importar coneccion a BD

const todoRouter = require('./routes/todo.routes'); //importar rutas


//middlewares

app.use(cors());

app.use(express.json()); 


// sincronizacion a bases de datos
db.authenticate()
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error)); 

db.sync()
    .then(() => console.log("base de datos sincronizada"))
    .catch((error) => console.log(error));


// iniciacion de rutas
app.use(todoRouter);



//configuracion de comunicacion (puerto)
app.listen(PORT, () => {
    console.log("servidor escuchando en puerto 8000");
})

