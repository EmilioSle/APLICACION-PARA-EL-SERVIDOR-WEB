"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Sensor_1 = require("../domain/entities/Sensor");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "127.0.0.1", // <-- No 'localhost'
    port: 5433,
    username: "postgres",
    password: "hola12345",
    database: "sensorcapas",
    synchronize: true,
    logging: true,
    entities: [Sensor_1.SensorEntity],
});
