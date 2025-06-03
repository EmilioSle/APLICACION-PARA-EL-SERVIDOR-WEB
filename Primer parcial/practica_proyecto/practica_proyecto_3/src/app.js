"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const data_source_1 = require("./interface/data-source");
const sensorRoutes_1 = __importDefault(require("./interface/routes/sensorRoutes")); // ✅ Importar el router
const app = (0, express_1.default)();
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("✅ Conectado a la BD");
    app.use("/sensors", sensorRoutes_1.default); // ✅ Aquí está el router, no una función
    app.listen(3000, () => {
        console.log("🚀 Servidor corriendo en http://localhost:3000");
    });
})
    .catch((error) => {
    console.error("❌ Error al conectar a la BD:", error);
});
