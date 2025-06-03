"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSensors = exports.createSensor = void 0;
const data_source_1 = require("../data-source");
const Sensor_1 = require("../../domain/entities/Sensor");
const sensorRepository = data_source_1.AppDataSource.getRepository(Sensor_1.SensorEntity);
const createSensor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Request body:", req.body);
        if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({ error: "El cuerpo de la solicitud está vacío" });
            return;
        }
        const sensor = sensorRepository.create(req.body);
        const result = yield sensorRepository.save(sensor);
        res.status(201).json(result);
    }
    catch (error) {
        console.error("Error guardando sensor:", error);
        res.status(500).json({ error: "Error al guardar el sensor", details: error });
    }
});
exports.createSensor = createSensor;
const getAllSensors = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sensors = yield sensorRepository.find();
        res.json(sensors);
    }
    catch (error) {
        console.error("Error obteniendo sensores:", error);
        res.status(500).json({ error: "Error al obtener sensores", details: error });
    }
});
exports.getAllSensors = getAllSensors;
