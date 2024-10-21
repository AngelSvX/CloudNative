import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

import userRouter from "./api/userRouters"

app.use("/users", userRouter)

// SERVIDOR INICIADO
app.listen(process.env.PORT, ()  =>{
  console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
})