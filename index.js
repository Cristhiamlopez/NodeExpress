import express from "express"
import {dirname,join } from "path"
import { fileURLToPath } from "url"

//Creando nuestro servidor
const app = express()
const __dirname = dirname (fileURLToPath(import.meta.url))

//Crear una consulta
app.get('/login',(req, res)=> res.sendFile(__dirname+"/views/login.html"))
app.get('/register',(req, res)=> res.sendFile(__dirname+"/views/register.html"))
app.get('/principal',(req, res)=> res.sendFile(__dirname+"/views/principal.html"))


//Imprimir en consola
app.listen(3000)
console.log("Servidor funcionando en el puerto ", 3000)

// configuracion 

app.use(express.static("public"))
