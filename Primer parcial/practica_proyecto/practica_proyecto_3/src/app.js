"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const sensorRoutes_1 = __importDefault(require("./routes/sensorRoutes"));
const data_source_1 = require("./data-source"); // importas la instancia creada
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conexión a la base de datos establecida y tablas creadas");
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/sensors", sensorRoutes_1.default);
    app.listen(3000, () => {
        console.log("Servidor corriendo en http://localhost:3000");
    });
})
    .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});
