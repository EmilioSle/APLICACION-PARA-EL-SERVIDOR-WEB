// src/app.ts
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./interface/data-source";
import sensorRoutes from "./interface/routes/sensorRoutes"; 

const app = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Conectado a la BD");

    app.use("/sensors", sensorRoutes); 

    app.listen(3000, () => {
      console.log("🚀 Servidor corriendo en http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("❌ Error al conectar a la BD:", error);
  });
