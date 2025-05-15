"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const SensorEntity_1 = require("./models/SensorEntity");
const SensorData_1 = require("./models/SensorData");
const AnomalyEvent_1 = require("./models/AnomalyEvent");
const DroughtPrediction_1 = require("./models/DroughtPrediction");
const SensorConfiguration_1 = require("./models/SensorConfiguration");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "agrotech_db",
    synchronize: true, // Solo en desarrollo
    logging: true,
    entities: [
        SensorEntity_1.SensorEntity,
        SensorData_1.SensorData,
        AnomalyEvent_1.AnomalyEvent,
        DroughtPrediction_1.DroughtPrediction,
        SensorConfiguration_1.SensorConfiguration
    ],
});
