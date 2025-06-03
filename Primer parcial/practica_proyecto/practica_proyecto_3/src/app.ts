import "reflect-metadata";
import express from "express";
import sensorRoutes from "./routes/sensorRoutes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Conexión a la base de datos establecida");

    app.use("/sensors", sensorRoutes);

    app.listen(3000, () => {
      console.log("🚀 Servidor corriendo en http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("❌ Error al conectar la base de datos:", error);
  });
