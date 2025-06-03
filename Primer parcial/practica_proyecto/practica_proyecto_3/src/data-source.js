"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Sensor_1 = require("./domain/entities/Sensor");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5433,
    username: "postgres",
    password: "hola12345",
    database: "sensorcapas", // Sin .bd ni extensiones
    synchronize: true, // Esto crea las tablas automáticamente
    logging: true, // Para que muestre en consola las queries SQL
    entities: [Sensor_1.SensorEntity],
});
